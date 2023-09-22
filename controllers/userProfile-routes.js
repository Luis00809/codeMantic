const router = require('express').Router();
const User = require('../models/User');
const Form = require('../models/Form');

// get all users and their form data
router.get('/', async (req, res) => {
    try {

        const userData = await User.findAll({
            include: [{ model: Form }],
            // if "this.formKey doesn't work in handlebars then include attributes from Form model"
        });

        const users = userData.map((data) => data.get({ plain: true }));
        // res.render('userProfile', {
        //     users
        // })
        res.status(200).json(users);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// get specific user
router.get('/user/:id', async (req, res) => {
    try {

        const userData = await User.findByPk(req.params, {
            include: [{ model: Form }],
        });

        const user = userData.get({ plain: true });
        // res.render('userProfile', {
        //     user,
        // });
        res.status(200).json(user);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;