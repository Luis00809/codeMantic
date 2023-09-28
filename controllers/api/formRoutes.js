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
    const {
      operating_system,
      languages,
      partner_pronouns,
      personality_type,
      ageRange,
      hobbies,
      contact_method,
    } = req.query;

    const whereConditions = [];

    if (operating_system) {
      whereConditions.push({ operating_system });
    }
    if (languages) {
      const languageList = languages.split(',');
      const languageConditions = languageList.map(language => ({
        languages: {
          [Op.like]: `%${language.trim()}%`, // Partial match for each language
        },
      }));
      whereConditions.push({ [Op.or]: languageConditions });
    }
    if (partner_pronouns) {
      whereConditions.push({ partner_pronouns });
    }
    if (personality_type) {
      whereConditions.push({ personality_type });
    }
    if (ageRange) {
      whereConditions.push({ ageRange });
    }
    if (hobbies) {
      const hobbyList = hobbies.split(',');
      const hobbyConditions = hobbyList.map(hobby => ({
        hobbies: {
          [Op.like]: `%${hobby.trim()}%`, // Partial match for each hobby
        },
      }));
      whereConditions.push({ [Op.or]: hobbyConditions });
    }
    if (contact_method) {
      whereConditions.push({ contact_method });
    }

    const filteredUsers = await User.findAll({
      include: [
        {
          model: Form,
          where: {
            [Op.and]: whereConditions, // Apply the conditions using Op.and
          },
        },
      ],
    });

    const users = filteredUsers.map((data) => data.get({ plain: true }));

    // console.log(users);
    res.render('filteredUser', { users });
    // res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



module.exports = router;