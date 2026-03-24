import * as dotenv from 'dotenv';
import path from 'path';

// Root .env config 
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

import cron from 'node-cron';
import prisma from '@zazu/db';
import { ApifyService, CommentService } from '@zazu/skill-comment-suggester';
import axios from 'axios';

// --- CONFIGURATION ---
const BOT_WEBHOOK_SECRET = process.env.AUTH_SECRET || 'zazu_local_secret';
const BOT_INTERNAL_URL = process.env.BOT_INTERNAL_URL || 'http://bot:3000/internal/notify';
const APIFY_TOKEN = process.env.APIFY_TOKEN || ''; // Needs to be added to .env

// --- SERVICES ---
const apifyService = new ApifyService(APIFY_TOKEN);
const commentService = new CommentService();

/**
 * Checks if current time is within a brand's active window.
 * @param activeHours { start: "HH:mm", end: "HH:mm" } or null
 */
function isWithinActiveWindow(activeHours: any): boolean {
  if (!activeHours || !activeHours.start || !activeHours.end) return true;

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const [startH, startM] = activeHours.start.split(':').map(Number);
  const [endH, endM] = activeHours.end.split(':').map(Number);

  const startMinutes = startH * 60 + startM;
  const endMinutes = endH * 60 + endM;

  return currentMinutes >= startMinutes && currentMinutes <= endMinutes;
}

/**
 * Core monitoring task. Executes every 5 minutes by default.
 */
async function monitorAllBrands() {
  console.log(`[Worker] Starting monitoring cycle: ${new Date().toISOString()}`);

  const suggesters = await prisma.commentSuggester.findMany({
    include: { user: true }
  });

  for (const brand of suggesters) {
    // 1. Check active hours
    if (!isWithinActiveWindow(brand.activeHours)) continue;

    // 2. Check schedule interval (simple comparison with lastCheckAt)
    const now = new Date();
    const intervalMs = brand.scheduleInterval * 60 * 1000;
    const nextDue = brand.lastCheckAt 
      ? new Date(brand.lastCheckAt.getTime() + intervalMs)
      : new Date(0);

    if (now < nextDue) continue;

    console.log(`[Worker] Monitoring brand: ${brand.brandName} (@${brand.targetAccounts.join(', ')})`);

    try {
      // 3. Scrape latest posts
      const posts = await apifyService.getLatestPosts(brand.targetAccounts);
      
      // 4. Filter for truly "new" posts
      // We check if we've already processed this post for this brand.
      const latestPost = posts[0];
      if (!latestPost) continue;

      const previouslyProcessed = await prisma.processedPost.findUnique({
        where: { postUrl: latestPost.url }
      });

      if (previouslyProcessed) {
        console.log(`[Worker] Post already processed: ${latestPost.url}`);
        continue;
      }

      // 5. Generate Comment Suggestion
      const suggestion = await commentService.generateSuggestion(latestPost, brand.systemPrompt);

      // 6. Notify the Bot (Nucleus)
      // Note: In local dev, if 'bot' is not reachable via HTTP, we log.
      await axios.post(BOT_INTERNAL_URL, {
        userId: brand.userId,
        brandName: brand.brandName,
        postUrl: latestPost.url,
        owner: latestPost.ownerUsername,
        suggestion: suggestion,
        secret: BOT_WEBHOOK_SECRET,
      }).then(async () => {
        // Only mark as processed if the bot notification succeeded
        await prisma.processedPost.create({
          data: {
            postUrl: latestPost.url,
            brandId: brand.id
          }
        });
      }).catch(err => {
        console.error(`[Worker] Notification failed for ${brand.brandName}: ${err.message}`);
      });

      // 7. Update lastCheckAt
      await prisma.commentSuggester.update({
        where: { id: brand.id },
        data: { lastCheckAt: now },
      });

    } catch (error: any) {
      console.error(`[Worker] Error processing brand ${brand.brandName}:`, error.message);
    }
  }
}

// Schedule the cycle: check every 5 minutes
// Suggesters with intervals > 5m will be perfectly handled by the skip logic.
cron.schedule('*/5 * * * *', monitorAllBrands);

console.log('✅ Zazŭ Proactive Worker is online and searching...');
// Trigger first run immediately
monitorAllBrands();
