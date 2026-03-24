import OpenAI from 'openai';
import { InstagramPost } from './apify-service';

/**
 * Service to generate creative and strategic comments using OpenAI.
 */
export class CommentService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  /**
   * Generates a comment suggestion for a specific post.
   * @param post The post data including caption and comments.
   * @param systemPrompt The brand-specific instruction for the AI.
   */
  async generateSuggestion(post: InstagramPost, systemPrompt: string): Promise<string> {
    const userPrompt = `
Analyze this Instagram post and suggest a high-impact comment.
- **Brand Context/Instruction:** ${systemPrompt}
- **Post Caption:** ${post.caption}
- **Existing Comments (top 10):** ${post.comments.slice(0, 10).join(' | ')}

Provide ONLY the suggested comment text. No explanations.
`;

    const completion = await this.openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'Eres un estratega de redes sociales experto en engagement.' },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.8,
    });

    return completion.choices[0].message?.content || 'No pude generar una sugerencia en este momento.';
  }
}
