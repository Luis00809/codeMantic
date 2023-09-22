const User = require('./User');
const Form = require('./Form');

User.hasOne(Form, {
    foreignKey: "id",       // changed foreign key
    onDelete: "CASCADE"

});

Form.belongsTo(User, {          // changed to belongsTo from hasOne
    foreignKey: "id",       // changed foreign key
    onDelete: "CASCADE"
})

module.exports = { User, Form };
