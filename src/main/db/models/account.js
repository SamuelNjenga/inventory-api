'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      Account.hasOne(models.User, {
        onDelete: 'cascade',
        foreignKey: {
          name: 'accountId',
          allowNull: false
        }
      })
    }
  }
  Account.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      }
    },
    {
      sequelize,
      modelName: 'Account'
    }
  )
  return Account
}
