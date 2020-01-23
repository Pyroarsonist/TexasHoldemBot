module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Chat', {
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
  down: queryInterface => queryInterface.dropTable('Chat'),
};
