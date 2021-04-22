'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Developer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Developer.belongsToMany(models.Game, { through: models.GameDeveloper })
      Developer.hasMany(models.GameDeveloper)
    }
  };
  Developer.init({
    name: DataTypes.STRING,
    headquarters: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Developer',
  });
  return Developer;
};