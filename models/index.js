const User = require('./User');
const Form = require('./Form');

User.hasOne(Form, {
    foreignKey: "id",
    onDelete: "CASCADE"

});

Form.hasOne(User, {
    foreignKey: "id",
    onDelete: "CASCADE"
})

module.exports = { User, Form };