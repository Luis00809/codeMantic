const express = require('express');
const router = express.Router();
const withAuth = require('../utils/auth');
const {User, Form} =require('../models')

router.get('/', async (req, res) => {
    try{
        const userFormData = await Form.findAll({
            include: [
                {
                   all: true, nested: true ,
                },
            ],
        })

        const formData = userFormData.map((formData) => formData.get({ plain: true }));

res.render('homepage',{
    formData,
    logged_in: req.session.logged_in 
});
} catch (err) {
    res.status(500).json(err);
  }
});
      
module.exports = router;