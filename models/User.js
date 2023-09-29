// Import necessary modules and packages
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing

// Define User model class that extends Model
class User extends Model {
    // check if provided password matches stored hashed password
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
            len: [5],       // Validate display_name length
        },
    }, 
    pronouns: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,               // Ensure email is unique

        validate: {
            isEmail: true,          // Validate email format
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8],                  // Validate password length 
        },
    },
    age: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    // user_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: 'user',
    //         key:'id'
    //     }
    // }


    // image: {
    //     type: DataTypes.BLOB,
    //     allowNull: true,
    // }
},
{
    // define hooks for password hashing before creating/updating
    hooks: {
        // Hash password before creating a new user
        beforeCreate: async (newData) => {
            newData.password = await bcrypt.hash(newData.password, 10);
            return newData;
        },
        // Hash password before updating user data if password is provided
        beforeUpdate: async (updatedData) => {
            if (updatedData.password) {
                updatedData.password = await bcrypt.hash(updatedData.password, 10);
            }
            return updatedData;
        },
    },
    sequelize,               // Set sequelize instance for model
    timestamps: false,       // Disable timestamps for created and updated at
    freezeTableName: true,   // Use same table name as model name
    underscored: true,       // Use underscores in column names
    modelName: 'user',      // Set model name
});
// Export User model
module.exports = User;