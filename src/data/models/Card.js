import Sequelize from 'sequelize';
import Model from '../sequelize';

const uniqueKey = '"Card_suit_rank_key"';
const Card = Model.define(
  'Card',
  {
    id: {
      type: Sequelize.SMALLINT,
      primaryKey: true,
      autoIncrement: true,
    },
    suit: {
      unique: uniqueKey,
      type: Sequelize.ENUM(['diamonds', 'hearts', 'spades', 'clubs']),
      allowNull: false,
    },
    rank: {
      unique: uniqueKey,
      allowNull: false,
      type: Sequelize.SMALLINT,
    },
    label: {
      type: Sequelize.STRING(32),
    },
  },
  {
    updatedAt: false,
    uniqueKeys: {
      [uniqueKey]: {
        fields: ['suit', 'rank'],
      },
    },
  }
);

export default Card;
