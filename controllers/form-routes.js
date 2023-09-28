const router = require('express').Router();
const Form = require('../models/Form');

// gets all forms
router.get('/', async (req, res) =>{
    try {

        const formData = await Form.findAll({
            include: [{ model: User }],
        });

        const forms = formData.map((data) => data.get({ plain: true }));
         
        // res.render('handlbar', {
        //     forms,
        // });

        res.status(200).json(forms);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// to get a users id
router.get('/:id', async (req, res) => {
    try {

        const formData = await Form.findByPk(req.params.id, {
            include: [{ model: User }],
        });

        if(!formData) {
            res.status(404).json({message: "No results found!"});
            return;
        };

        const form = formData.get({ plain: true });

        res.render('results', {
            searchResults,
        });

        res.status(200).json(form);


    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});




module.exports = router;



