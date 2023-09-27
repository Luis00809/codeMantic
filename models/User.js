const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt'); // added bcyrpt

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
};

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    }, 
    display_name: {
        type: DataTypes.STRING,
        allowNull: false,
        
        validate: {
            len: [5],
        },
    }, 
    pronouns: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,

        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8],
        },
    },
    age: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key:'id'
        }
    }


    // image: {
    //     type: DataTypes.BLOB,
    //     allowNull: true,
    // }
},
{
    hooks: {
        beforeCreate: async (newData) => {
            newData.password = await bcrypt.hash(newData.password, 10);
            return newData;
        },
        beforeUpdate: async (updatedData) => {
            if(updatedData.password) {
                updatedData.password = await bcrypt.hash(updatedData.password, 10);
            }
            return updatedData;
        },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
}
);

module.exports = User;