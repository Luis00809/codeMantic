const express = require('express');
const router = express.Router();
const withAuth = require('../utils/auth');
const {User, Form} =require('../models')

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
  res.render('search')
});

router.get('/solved', (req, res) => {
  res.render('solved');
});

module.exports = router;