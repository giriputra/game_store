'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    checkPrice() {
      if (this.price === 0) {
        return 'Free'
      }
      return this.price
    }

    gameWorth() {
      return this.price * this.amountSold
    }

    static associate(models) {
      // define association here
      Game.belongsToMany(models.Developer, { through: models.GameDeveloper })
      Game.hasMany(models.GameDeveloper)
    }
  };
  Game.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    image: DataTypes.STRING,
    amountSold: DataTypes.INTEGER,
  }, {
    hooks: {
      beforeCreate: (instance, opt) => {
        instance.amountSold = 0
      }
    },
    sequelize,
    modelName: 'Game',
  });
  return Game;
};