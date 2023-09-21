const User = require('./User');
const Form = require('./Form');

User.hasOne(Form, {
    foreignKey: "userId",       // changed foreign key
    onDelete: "CASCADE"

});

Form.belongsTo(User, {          // changed to belongsTo from hasOne
    foreignKey: "userId",       // changed foreign key
    onDelete: "CASCADE"
})

module.exports = { User, Form };