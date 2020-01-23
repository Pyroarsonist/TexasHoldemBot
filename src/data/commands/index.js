import debugHandler from 'debug';
import middleware from './middleware';

const debug = debugHandler('texas-holdem-bot:commands');

export default bot => {
  bot.catch(err => {
    debug(err);
  });

  bot.use(middleware);

  bot.start(ctx => ctx.reply('Hello world!'));
};
