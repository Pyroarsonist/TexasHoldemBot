import debugHandler from 'debug';
import { Card } from 'data/models';
import { literal } from 'sequelize';
import { redis } from 'config';
import RedisSession from 'telegraf-session-redis';
import middleware from './middleware';

const session = new RedisSession({
  store: {
    host: redis.host,
    port: redis.port,
  },
});

const debug = debugHandler('texas-holdem-bot:commands');

export default bot => {
  bot.catch(err => {
    debug(err);
  });

  bot.use(session);

  bot.on('text', ctx => {
    // todo: do smth with session
    ctx.session.counter = ctx.session.counter || 0;
    ctx.session.counter++;
    return ctx.reply(`Counter: ${ctx.session.counter}`);
  });

  bot.use(middleware);

  bot.start(ctx => ctx.reply('Hello world!'));

  bot.command('card', async ctx => {
    const card = await Card.findOne({ order: literal('RANDOM()') });
    return ctx.reply(card.label);
  });
};
