
const User = require('./User');
const Form = require('./Form');
const Review = require('./Review')

User.hasOne(Form, {
    foreignKey: "userForm",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"

User.hasOne(Form, {                    // Define one-to-one relationship: One User has one Form
    foreignKey: "userForm",           // Use "userForm" as foreign key
    onDelete: "CASCADE",             // Define onDelete behavior
    onUpdate: "CASCADE"             // Define onUpdate behavior
});

Form.belongsTo(User, {               // Define many-to-one relationship: Many Forms belong to one User
    foreignKey: "userForm",          // Use "userForm" as foreign key
});


User.hasMany(Review, {
    foreignKey: 'review_id',
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

Review.belongsTo(User, {
    foreignKey: 'review_id'
})

module.exports = { User, Form};      // Export User and Form models


module.exports = { User, Form, Review};
