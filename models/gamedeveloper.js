'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GameDeveloper extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GameDeveloper.belongsTo(models.Developer)
      GameDeveloper.belongsTo(models.Game)
    }
  };
  GameDeveloper.init({
    DeveloperId: DataTypes.INTEGER,
    GameId: DataTypes.INTEGER,
    amountSold: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GameDeveloper',
  });
  return GameDeveloper;
};