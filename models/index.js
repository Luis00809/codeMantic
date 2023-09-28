const User = require('./User');        // Import User model
const Form = require('./Form');        // Import Form model

User.hasOne(Form, {                    // Define one-to-one relationship: One User has one Form
    foreignKey: "userForm",           // Use "userForm" as foreign key
    onDelete: "CASCADE",             // Define onDelete behavior
    onUpdate: "CASCADE"             // Define onUpdate behavior
});

Form.belongsTo(User, {               // Define many-to-one relationship: Many Forms belong to one User
    foreignKey: "userForm",          // Use "userForm" as foreign key
});

// User.hasMany(Review, {             
//     foreignKey: 'user_id',         
//     onDelete: "CASCADE",          
//     onUpdate: "CASCADE"          
// })

// Review.belongsTo(User, {           
//     foreignKey: 'user_id'         
// })

module.exports = { User, Form};      // Export User and Form models

