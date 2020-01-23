import Sequelize from 'sequelize';
import Model from '../sequelize';

const User = Model.define('User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  isBot: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  firstName: {
    type: Sequelize.STRING(64),
  },
  lastName: {
    type: Sequelize.STRING(64),
  },
  userName: {
    type: Sequelize.STRING(64),
  },
  languageCode: {
    type: Sequelize.STRING(32),
  },
});

export default User;
