import Sequelize from 'sequelize';
import Model from '../sequelize';

const User = Model.define('Chat', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
  },
  type: {
    type: Sequelize.ENUM(['private', 'group', 'supergroup', 'channel']),
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING(64),
  },
  userName: {
    type: Sequelize.STRING(64),
  },
  firstName: {
    type: Sequelize.STRING(64),
  },
  lastName: {
    type: Sequelize.STRING(64),
  },
});

export default User;
