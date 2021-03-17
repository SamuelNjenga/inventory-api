'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class SupplierProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  SupplierProduct.init(
    {
      supplierId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'suppliers',
          key: 'id'
        }
      },
      productId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'products',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'SupplierProduct'
    }
  )
  return SupplierProduct
}
