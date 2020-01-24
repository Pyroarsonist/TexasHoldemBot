import debugHandler from 'debug';
import { Card } from 'data/models';
import { literal } from 'sequelize';
import middleware from './middleware';

const debug = debugHandler('texas-holdem-bot:commands');

export default bot => {
  bot.catch(err => {
    debug(err);
  });

  bot.use(middleware);

  bot.start(ctx => ctx.reply('Hello world!'));

  bot.command('card', async ctx => {
    const card = await Card.findOne({ order: literal('RANDOM()') });
    return ctx.reply(card.label);
  });
};
