import { ZazuSkill, ZazuContext } from '@zazu/skills-core';
import prisma from '@zazu/db';

export class BrandManagerSkill implements ZazuSkill {
  id = 'feature-brand-manager';
  name = 'Brand Monitor Manager';
  priority = 10;

  async canHandle(ctx: ZazuContext): Promise<boolean> {
    const text = ctx.textContent || '';
    return text.startsWith('/brand');
  }

  async handle(ctx: ZazuContext): Promise<void> {
    await ctx.reply('🛠️ **Zazŭ Brand Manager**\n\n' +
                    'Esta función se ha movido al nuevo **Telegram Mini App**. ' +
                    'Pronto podrás gestionar tus marcas directamente desde una interfaz visual fluida.');
  }
}
