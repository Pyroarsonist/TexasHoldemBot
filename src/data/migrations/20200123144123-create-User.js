module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('User', {
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    }),
  down: queryInterface => queryInterface.dropTable('User'),
};
