const router = require('express').Router();   // import express
const User = require('../models/User');       // import user model
const Form = require('../models/Form');       // import form model
const Review = require ('../models/Review');  // import review model

// get all users and their form data
router.get('/', async (req, res) => {
    try {

    // Fetch all user data including associated Form data
    const userData = await User.findAll({
             include: [{ model: Form }],
            // if "this.formKey doesn't work in handlebars then include attributes from Form model"
            });

        const users = userData.map((data) => data.get({ plain: true }));
        res.render('userProfile', {
             users
        })

        // Delete const after uncomenting 
        // need to render only using this for insomnia
        // res.status(200).json(userData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});




// get specific user
router.get('/user/:id', async (req, res) => {
    try {
        

        // // Check if the user is logged in
        // if (!req.session.loggedIn) {
        //     return res.redirect('/login'); // Redirect to the login page if not logged in
        //   } 
      
        //   // // Check if the requested user ID matches the logged-in user's ID
        //   if (req.params.id !== req.session.user_id.toString()) {
        //     return res.status(403).send('Access denied'); // Return a 403 Forbidden status
        //   } 

        const userData = await User.findByPk(req.params.id, {
            where: {
                id: req.params.id,
                // userForm: req.params.id
            },
            include: [{ 
                model: Form,
                attributes: ['languages', 'bio', "contact_method",'partner_pronouns','personality_type', 'operating_system', 'hobbies'],
             },
            //  {
            //     model: Review,
            //     attributes: ['Review_text', 'reviewBadge']
            //  },
            ],
        });
    
        if (!userData) {
          return res.status(404).send('User not found');
        }
    
        

        const user = userData.get({ plain: true });
        res.render('userProfile', {
          user,
          loggedIn: req.session.loggedIn 
        });
    
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

// router.get('/solved', async (req, res) => {
//     try {
// console.log("test")
//         const userData = await User.findAll({
//             include: [{ 
//                 model: Form,
//                 attributes: ['languages', 'bio', "contact_method",'partner_pronouns','personality_type', 'operating_system', 'hobbies'],
//              },
//             ],
//         });

//         const users = userData.map((user) => user.get ({ plain: true }));
//         console.log(users)
//         res.render('solved', {
//             users,
//             loggedIn: req.session.loggedIn
//         });
//         // res.status(200).json(userData);

//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

module.exports = router;    // Export Router

