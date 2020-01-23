import telegram from './core/telegram';
import models from './data/models';

process
  .on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection at:', p, 'reason:', reason);
  })
  .on('uncaughtException', err => {
    console.error(err, 'Uncaught Exception thrown');
    console.error(err.stack);
    process.exit(1);
  });

(async () => {
  await models.sync();
  await telegram();
  console.info('texas-holdem-bot started successfully');
})();
