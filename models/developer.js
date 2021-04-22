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

    static quote(number) {
      switch (number) {
        case 1:
          return `I love coding.`
        case 2:
          return `Game development is my passion.`
        case 3:
          return `Don't worry if it doesn't work right. If everything did, you'd be out of a job.`
        case 4:
          return `Don't comment bad code - rewrite it.`
        case 5:
          return `Without requirements or design, programming is the art of adding bugs to an empty text file.`
        default:
          return `One man's scrappy software is another man's full time job.`
      }
    }
  };
  Developer.init({
    name: DataTypes.STRING,
    nationality: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Developer',
  });
  return Developer;
};