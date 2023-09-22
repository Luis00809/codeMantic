const User = require('./User');
const Form = require('./Form');

User.hasOne(Form, {
    foreignKey: "id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"

});

Form.hasOne(User, {
    foreignKey: "id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

module.exports = { User, Form };
