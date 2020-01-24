import dotenv from 'dotenv';

dotenv.config();

// eslint-disable-next-line no-underscore-dangle
global.__DEV__ = process.env.NODE_ENV !== 'production';

export const server = {
  port: process.env.PORT || 8443,
  url: process.env.URL,
};

export const sslFolder = process.env.SSL_FOLDER;

export const token = process.env.TELEGRAM_BOT_TOKEN;

export const databaseUrl = process.env.DATABASE_URL;

export const redis = {
  host: process.env.TELEGRAM_SESSION_HOST || 'localhost',
  port: process.env.TELEGRAM_SESSION_PORT || 6379,
};
