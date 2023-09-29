const router = require('express').Router();  // Import Express Router

const apiRoutes = require('./api');  // Import API routes 
const homeRoutes = require('./homeRoutes');  // Import home routes 
const formRoutes = require('./form-routes');  // Import form routes 
const profileRoutes = require('./userProfile-routes');  // Import profile routes

router.use('/api', apiRoutes);  // Use API routes when URL path starts with '/api'
router.use('/', homeRoutes);  // Use home routes when URL path is '/'
router.use('/profile', profileRoutes);  // Use profile routes when URL path starts with '/profile'
router.use('/form', formRoutes);  // Use form routes when URL path starts with '/form'

router.use((req, res) => {  // Handle any requests that didn't match above routes with a 404 error
    res.status(404).end();
});

module.exports = router;  // Export router
