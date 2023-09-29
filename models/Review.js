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
    review_id: {
      type: DataTypes.INTEGER,
        allowNull: true,
        references:  {
          model: 'user',
          key: 'id'
      }
    },
    badge: {    
      type: DataTypes.STRING,     
      allowNull: true,  
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'review'
  }
);

module.exports = Review;