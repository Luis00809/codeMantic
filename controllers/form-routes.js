
const router = require('express').Router();
const Form = require('../models/Form');
const User = require('../models/User');
const Review = require('../models/Review')

// gets all forms
router.get('/', async (req, res) =>{
    try {

        // Fetch all form data including associated User data
        const formData = await Form.findAll({

            include: [{ model: User }, { model: Review }],
        });

        const forms = formData.map((data) => data.get({ plain: true }));
         

        res.status(200).json(forms);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// to get a users id
router.get('/:id', async (req, res) => {
    try {

        // Find a form by its primary key (ID), including associated User data
        const formData = await Form.findByPk(req.params.id, {
            include: [{ model: User }, { model: Review }],
        });

        // If no form data is found, send a 404 response with a message
        if(!formData) {
            res.status(404).json({message: "No results found!"});
            return;
        };

        // Get form data as a plain JavaScript object
        const form = formData.get({ plain: true });

         // Render 'results' view with searchResults
        res.render('results', {
            searchResults,
        });

        // Send JSON response with the user's form data
        res.status(200).json(form);


    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});




module.exports = router;        // Export Router



