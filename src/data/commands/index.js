import debugHandler from 'debug';

const debug = debugHandler('texas-holdem-bot:commands');

export default bot => {
  bot.catch(err => {
    debug(err);
  });

  bot.start(async ctx => ctx.reply('Hello world!'));
};
