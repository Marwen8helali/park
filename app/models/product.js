'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.product.belongsTo(models.stock, {
        foreignKey: {
          allowNull: false
        }

      })
    }
  };
  product.init({
    nom: DataTypes.STRING,
    ref: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};