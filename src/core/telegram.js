import Telegraf from 'telegraf';
import fs from 'fs';
import debugHandler from 'debug';
import setupCommands from 'data/commands';
import { server, token, sslFolder } from 'config';

const debug = debugHandler('texas-holdem-bot:telegram');

// https://github.com/nodejs/help/issues/253 or create_ssl_serticifates.sh for creating certificates
const tlsPaths = {
  key: `${sslFolder}certs/server/server.key`, // Path to file with PEM private key
  cert: `${sslFolder}certs/server/server.crt`, // Path to file with PEM certificate (should be with your url)
  ca: `${sslFolder}certs/ca/ca.crt`, // This is necessary only if the client uses the self-signed certificate.
};

export default async () => {
  if (!token) {
    throw new Error('No telegram bot key supplied');
  }

  debug('Initializing telegram bot');

  let bot = new Telegraf(token);
  const botData = await bot.telegram.getMe();
  debug('Fetched bot data: %o', botData);
  bot = new Telegraf(token, { username: botData.username });

  // loading commands
  setupCommands(bot);

  // setting up connection webhooks or polling
  if (__DEV__ || !sslFolder) {
    bot.startPolling();
    debug('Started with polling');
  } else {
    // removing webhooks
    await bot.telegram.deleteWebhook();
    const tlsOptions = {
      key: fs.readFileSync(tlsPaths.key), // Path to file with PEM private key
      cert: fs.readFileSync(tlsPaths.cert), // Path to file with PEM certificate,
      ca: [
        // This is necessary only if the client uses the self-signed certificate.
        fs.readFileSync(tlsPaths.ca),
      ],
    };
    // server side
    await bot.telegram.setWebhook(`${server.url}:${server.port}/bot${token}`, {
      source: tlsPaths.ca,
    });
    // telegram side
    bot.startWebhook(`/bot${token}`, tlsOptions, server.port);
    debug('Started with webhook');
  }
};
