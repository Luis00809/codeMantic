const router = require('express').Router(); // Import Express Router
const userRoutes = require('./userRoutes'); // Import user routes
const formRoutes = require('./formRoutes'); // Import form routes
const reviewRoutes = require('./reviewRoutes'); // Import review routes

router.use('/users', userRoutes); // Use user routes under '/users' endpoint
router.use('/form', formRoutes); // Use form routes under '/form' endpoint
router.use('/review', reviewRoutes); // Use review routes under '/review' endpoint

module.exports = router; // Export router 
