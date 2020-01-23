import sequelize from '../sequelize';
import User from './User';
import Chat from './Chat';

const sync = (...args) => sequelize.sync(...args);

export default { sync };

export { User, Chat };
