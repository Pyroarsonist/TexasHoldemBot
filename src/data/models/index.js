import sequelize from '../sequelize';
import User from './User';
import Chat from './Chat';
import Card from './Card';

const sync = (...args) => sequelize.sync(...args);

export default { sync };

export { User, Chat, Card };
