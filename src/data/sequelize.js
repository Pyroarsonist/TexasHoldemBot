import Sequelize from 'sequelize';
import { databaseUrl } from 'config';
import onShutdown from 'core/shutdown';
import debugHandler from 'debug';

const debug = debugHandler('texas-holdem-bot:sequelize');

debug('Initializing database connection');

const sequelize = new Sequelize(databaseUrl, {
  logging: false,
  dialect: 'postgres',
  define: {
    freezeTableName: true,
  },
});

onShutdown(async () => {
  debug('Closing database connection');
  await sequelize.close();
});

export default sequelize;
