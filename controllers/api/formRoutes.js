const router = require('express').Router();
const Form = require('../../models/Form');
const User = require('../../models/User');
const { Op } = require('sequelize');
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
// for languages the query would look like: languages=Python,Javascript for multiple

router.get('/filteredList', async (req, res) => {
    try {
        // Extract filter parameters from the query string
        const { operating_system, languages, partner_pronouns, personality_type } = req.query;
    
        // Create an empty object to store the conditions for filtering
        const whereConditions = {};
    
        // Add conditions for each filter parameter if they are provided
        if (operating_system) {
          whereConditions.operating_system = operating_system;
        }
        if (languages) {
          // Split the comma-separated values into an array
          const languageList = languages.split(',');
          
          // Create an array of conditions for each language
          const languageConditions = languageList.map(language => ({
            languages: {
              [Op.like]: `%${language.trim()}%`, // Partial match for each language
            },
          }));
          
          // Combine multiple conditions with OR operator
          whereConditions[Op.or] = languageConditions;
        }
        if (partner_pronouns) {
          whereConditions.partner_pronouns = partner_pronouns;
        }
        if (personality_type) {
          whereConditions.personality_type = personality_type;
        }

    // Use Sequelize's findAll method to filter users
    const filteredUsers = await User.findAll({
      include: [
        {
          model: Form,
          where: whereConditions, // Apply the conditions here
        },
      ],
    });

    res.json(filteredUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});




// client side would look something like this: 
// const response = await fetch('/api/form/filteredList?FormKey=clientRequest&FormKey=clientRequest...', {
//  method: 'GET',
//  body: JSON.stringify({ checkedValues }),
//   headers: { 'Content-Type': 'application/json' },
// });


module.exports = router;