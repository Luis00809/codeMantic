const router = require('express').Router();
const { User } = require('../../models');

// create a user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      dispay_name: req.body.dispay_name,
      pronouns: req.body.pronouns,
      email:req.body.email,
      password:req.body.password,
      age:req.body.age,
    })
  const userFormData = await Form.create({
      languages: req.body.languages,
      bio: req.body.bio,
      contact_method: req.body.contact_method,
      partner_pronouns: req.body.partner_pronouns,
      personality_type: req.body.personality_type,
      operating_system: req.body.operating_system,
      hobbies: req.body.hobbies,
  })
  
    req.session.save(() => {
      req.session.user_id = userData.id, userFormData;
      req.session.logged_in = true;
      req.session.userForm = userData.userForm;

      res.status(200).json(userData, userFormData);
      req.session.save(() => {
        
      })
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect credintials, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect credintials, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;