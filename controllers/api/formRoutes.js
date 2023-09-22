const router = require('express').Router();
const Form = require('../../models/Form');

// create a form 
router.post('/', async (req, res) => {
    try{
        const formData = await Form.create(req.body);
        res.status(200).json(formData);

    } catch (err) {
        res.status(400).json(err)
    }
});

// update a form
router.put('/update/:id', async (req, res) => {
    try {

        const formData = await Form.update(req.body, 
            {
                where: {
                    id: req.body.id,
                },
            });

        res.status(200).json(formData);

    } catch (err) {
        res.status(400).json(err)
    }
});



module.exports = router;