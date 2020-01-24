const uniqueKey = '"Card_suit_rank_key"';
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable(
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
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('NOW'),
        },
      },
      {
        uniqueKeys: {
          uniqueKey: {
            fields: ['suit', 'rank'],
          },
        },
      }
    ),
  down: queryInterface => queryInterface.dropTable('Card'),
};
