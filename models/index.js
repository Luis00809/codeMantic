const User = require('./User');
const Form = require('./Form');

User.hasOne(Form, {
    foreignKey: "userForm",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"

});

Form.belongsTo(User, {
    foreignKey: "userForm",
});


module.exports = { User, Form };
