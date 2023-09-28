const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define Form model using Sequelize
class Form extends Model {};

Form.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    languages: {
      type: DataTypes.STRING,
      allowNull: true, // Allows null values
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true, // Change back to false before committing
    },
    contact_method: {
      type: DataTypes.STRING,
      allowNull: false, // Requires a value
    },
    partner_pronouns: {
      type: DataTypes.STRING,
      allowNull: false, // Requires a value
    },
    personality_type: {
      type: DataTypes.STRING,
      allowNull: false, // Requires a value
    },
    ageRange: {
      type: DataTypes.STRING,
      allowNull: false, // Requires a value
    },
    operating_system: {
      type: DataTypes.STRING,
      allowNull: true, // Allows null values
    },
    hobbies: {
      type: DataTypes.STRING,
      allowNull: true, // Allows null values
    },
    userForm: {
      type: DataTypes.INTEGER,
      allowNull: false, // Requires a value
      references: {
        model: 'user', // References 'user' model
        key: 'id', // Uses 'id' column of 'user' model as reference
      },
    },
  },
  {
    sequelize, // Pass sequelize connection
    timestamps: false, // Disable timestamps (e.g., createdAt, updatedAt)
    freezeTableName: true, // Use model name as table name
    underscored: true, // Use underscores in column names (e.g., user_form)
    modelName: 'form', // Model name in singular form
  }
);

module.exports = Form; // Export Form model

