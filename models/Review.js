const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Review_text: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      },
    },

    reviewBadge: {    // ADDED reviewBadge
      type: DataTypes.STRING,     
      allowNull: true,  
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: 'user',
      //   key: 'id'
      // }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'review'
  }
);

module.exports = Review;

//model name was "comment"
// exported "comment rather than Review" 