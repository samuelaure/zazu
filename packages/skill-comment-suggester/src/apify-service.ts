import { ApifyClient } from 'apify-client';

export interface InstagramPost {
  id: string;
  url: string;
  caption: string;
  ownerUsername: string;
  comments: string[];
  timestamp: string;
}

/**
 * Service to interact with Apify to scrape Instagram data.
 */
export class ApifyService {
  private client: ApifyClient;
  private actorId = 'Lk0fLxLbWrlWLCvtl';

  constructor(token: string) {
    this.client = new ApifyClient({
      token: token,
    });
  }

  /**
   * Scrapes the latest posts from a list of Instagram usernames.
   */
  async getLatestPosts(usernames: string[]): Promise<InstagramPost[]> {
    const input = {
      mode: 'FEED',
      usernames: usernames,
      limit: 5, // We pull a few to ensure we find something new
      maxComments: 20,
      includeReplies: false,
      sortDirection: 'desc',
    };

    // Start the actor and wait for it to finish
    const run = await this.client.actor(this.actorId).call(input);

    // Fetch results from the run's dataset
    const { items } = await this.client.dataset(run.defaultDatasetId).listItems();

    return items.map((item: any) => ({
      id: item.id || item.shortCode,
      url: item.url || `https://www.instagram.com/p/${item.shortCode}/`,
      caption: item.caption || '',
      ownerUsername: item.ownerUsername || item.ownerId,
      comments: item.comments?.map((c: any) => c.text) || [],
      timestamp: item.timestamp,
    }));
  }
}
