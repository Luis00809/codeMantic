const router = require('express').Router();
const Form = require('../../models/Form');
const User = require('../../models/User');

router.get('/forms', async (req, res) => {
    try {

        const formData = await Form.findAll();
        res.json(formData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

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


// grab filtered users: 
// Our client side fetch would look something like this: 
// GET /filteredList/?languages=JavaScript&ageRange=18-25

router.get('/filteredList/', async (req, res) => {
    try{
        // later switch pronounse into form model or find a way to also grab bio from User model
        const { languages, bio, personality_type, ageRange, operating_system, hobbies  } = req.query;

        const filter = {
            languages,
            bio,
            personality_type,
            ageRange,
            operating_system,
            hobbies
        }

        const filteredUsers = await User.findAll({
            include: {
                model: Form,
                where: filter
            }
        });

        res.status(200).json(filteredUsers);

    } catch (err) {{
        res.status(400).json(err)
        console.log(err);
    }}
});



// client side would look something like this: 
// const response = await fetch('/api/form/filteredList?FormKey=clientRequest&FormKey=clientRequest...', {
//  method: 'GET',
//  body: JSON.stringify({ checkedValues }),
//   headers: { 'Content-Type': 'application/json' },
// });


module.exports = router;