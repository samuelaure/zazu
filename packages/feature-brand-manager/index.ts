import { ZazuSkill, ZazuContext } from '@zazu/skills-core';
import { BrandService } from '@zazu/skill-comment-suggester';
import prisma from '@zazu/db';

export class BrandManagerSkill implements ZazuSkill {
  id = 'feature-brand-manager';
  name = 'Brand Monitor Manager';
  priority = 10;
  private brandService = new BrandService();

  async canHandle(ctx: ZazuContext): Promise<boolean> {
    const text = ctx.textContent || '';
    return text.startsWith('/brand') || (ctx.session && !!ctx.session.brandWizard);
  }

  async handle(ctx: ZazuContext): Promise<void> {
    const text = ctx.textContent || '';
    
    // Command: /brand help
    if (text.startsWith('/brand help') || text === '/brand') {
      await ctx.reply('🛠️ **Zazŭ Brand Manager**\n\n' +
                      '• `/brand list` - Ver mis marcas activas\n' +
                      '• `/brand create` - Crear nueva marca paso a paso\n' +
                      '• `/brand remove` - Eliminar una marca');
      return;
    }

    // Command: /brand list
    if (text === '/brand list') {
      const brands = await this.brandService.getSuggesters(ctx.dbUser.id);
      if (brands.length === 0) {
        await ctx.reply('No tienes ninguna marca configurada actualmente. Usa `/brand create` para empezar.');
        return;
      }
      
      const list = brands.map((b: any) => `• **${b.brandName}**: @${b.targetAccounts.join(', ')} (Cada ${b.scheduleInterval}m)`).join('\n');
      await ctx.reply(`📋 **Tus Marcas:**\n\n${list}`);
      return;
    }

    // Command: /brand remove
    if (text.startsWith('/brand remove')) {
      const name = text.replace('/brand remove', '').trim();
      if (!name) {
        await ctx.reply('Por favor, indica el nombre de la marca. Ej: `/brand remove Nike`');
        return;
      }
      
      // Delete logic (added for Phase UX)
      try {
        await (prisma as any).commentSuggester.delete({
          where: {
            userId_brandName: {
              userId: ctx.dbUser.id,
              brandName: name
            }
          }
        });
        await ctx.reply(`🗑️ Marca **${name}** eliminada correctamente.`);
      } catch (e) {
        await ctx.reply(`❌ No encontré ninguna marca llamada "${name}".`);
      }
      return;
    }

    // Command: /brand create
    if (text === '/brand create') {
      ctx.session.brandWizard = { step: 'NAME' };
      await ctx.reply('¡Genial! Vamos a crear una nueva marca. ¿Cuál es el **nombre** de la marca? (Ej: "Zazŭ Store")');
      return;
    }

    // Wizard Flow: Interactive step-by-step
    if (ctx.session?.brandWizard) {
      const wizard = ctx.session.brandWizard;
      
      switch (wizard.step) {
        case 'NAME':
          wizard.brandName = text;
          wizard.step = 'ACCOUNTS';
          await ctx.reply(`Nombre guardado: **${text}**. Ahora envíame las **cuentas de Instagram** a monitorear (separadas por coma, ej: zazu_bot, sam_aure).`);
          break;

        case 'ACCOUNTS':
          wizard.targetAccounts = text.split(',').map(s => s.trim().replace('@', ''));
          wizard.step = 'PROMPT';
          await ctx.reply('Cuentas configuradas. Ahora dime el **System Prompt** (la personalidad de tu marca para comentar).');
          break;

        case 'PROMPT':
          wizard.systemPrompt = text;
          wizard.step = 'INTERVAL';
          await ctx.reply('Por último, ¿cada cuántos **minutos** debo revisar? (Ej: 15, 30, 60)');
          break;

        case 'INTERVAL':
          const interval = parseInt(text) || 15;
          await this.brandService.upsertSuggester(ctx.dbUser.id, {
            brandName: wizard.brandName,
            targetAccounts: wizard.targetAccounts,
            systemPrompt: wizard.systemPrompt,
            scheduleInterval: interval,
            activeHours: { start: '00:00', end: '23:59' }
          });
          
          ctx.session.brandWizard = null;
          await ctx.reply(`✅ **¡Éxito!** La marca **${wizard.brandName}** ya está configurada y el worker empezará a monitorearla.`);
          break;
      }
      return;
    }
  }
}
