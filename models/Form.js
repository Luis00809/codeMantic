const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Form extends Model {};

Form.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    languages: {
        type: DataTypes.STRING,
        allowNull: true,
    }, 
    bio: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    contact_method: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    partner_pronouns: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    personality_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ageRange: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    operating_system: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    hobbies: {
        type: DataTypes.STRING,
        allowNull: true,
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'form',
}
);