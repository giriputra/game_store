'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GameDevelopers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      DeveloperId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Developers'
          },
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      GameId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Games'
          },
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      amountSold: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('GameDevelopers');
  }
};