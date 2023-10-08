const express = require('express');
const router = express.Router();
const withAuth = require('../utils/auth');
const {User, Form} =require('../models')
const Review = require('../models/Review')

router.get('/', async (req, res) => {
    try{
        const userData = await User.findAll({
            include: [
                {
                   all: true, nested: true ,
                },
            ],
        })

        const dataUser = userData.map((formData) => formData.get({ plain: true }));

res.render('homepage',{
    dataUser,
    logged_in: req.session.logged_in 
});
} catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/about', (req,res) => {
  res.render('about')
});

router.get('/search', (req,res) => {
  if (req.session.logged_in) {
    res.render('search');
  }  
});

// router.get('/submitReviews', (req,res) => {
//   if (req.session.loggin_in) {
//     res.render('submitReviews')
//   }
// })

router.get('/solved', async (req, res) => {
  try {
    console.log("test")
            const userData = await User.findAll({
                include: [{ 
                    model: Form,
                    attributes: ['languages', 'bio', "contact_method",'partner_pronouns','personality_type', 'operating_system', 'hobbies'],
                 },
                 { model: Review },
                ],
            });
    
            const users = userData.map((user) => user.get ({ plain: true }));
            console.log(users)
            if (req.session.logged_in) {
              res.render('solved', {
                users,
                loggedIn: req.session.loggedIn
            });
            // res.status(200).json(userData);
            }  
            
    
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
});

module.exports = router;    // Export Router