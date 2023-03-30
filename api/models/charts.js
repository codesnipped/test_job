'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Charts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Charts.init({
    kwh: DataTypes.DOUBLE,
    temp: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Charts',
    underscored: true,
    freezeTableName: true,
  });
  return Charts;
};