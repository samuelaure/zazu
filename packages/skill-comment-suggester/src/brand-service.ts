import prisma from '@zazu/db';

export interface SuggesterConfig {
  brandName: string;
  targetAccounts: string[];
  systemPrompt: string;
  activeHours?: { start: string; end: string };
  scheduleInterval?: number;
}

/**
 * Service to manage brand configurations for users.
 */
export class BrandService {
  /**
   * Creates or updates a brand monitoring configuration for a user.
   */
  async upsertSuggester(userId: string, config: SuggesterConfig) {
    return prisma.commentSuggester.upsert({
      where: {
        userId_brandName: {
          userId: userId,
          brandName: config.brandName,
        },
      },
      update: {
        targetAccounts: config.targetAccounts,
        systemPrompt: config.systemPrompt,
        activeHours: config.activeHours as any,
        scheduleInterval: config.scheduleInterval,
      },
      create: {
        userId: userId,
        brandName: config.brandName,
        targetAccounts: config.targetAccounts,
        systemPrompt: config.systemPrompt,
        activeHours: config.activeHours as any,
        scheduleInterval: config.scheduleInterval || 15,
      },
    });
  }

  /**
   * Retrieves all suggesters for a specific user.
   */
  async getSuggesters(userId: string) {
    return prisma.commentSuggester.findMany({
      where: { userId },
    });
  }
}
