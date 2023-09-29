
const User = require('./User');
const Form = require('./Form');
const Review = require('./Review')

User.hasOne(Form, {
    foreignKey: "userForm",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"

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


module.exports = { User, Form, Review};
