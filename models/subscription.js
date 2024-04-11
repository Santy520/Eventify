const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Subscription extends Model {}

Subscription.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    // compositeIndex prevents entries from having the same combination of userId and eventId
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: 'compositeIndex',
      references: {
        model: 'user',
        key: 'id'
      }
    },
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: 'compositeIndex',
      references: {
        model: 'event',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'subscription'
  }
);

module.exports = Subscription;