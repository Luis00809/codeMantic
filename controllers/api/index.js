const router = require('express').Router();
const userRoutes = require('./userRoutes');
const formRoutes = require('./formRoutes');
const reviewRoutes = require('./reviewRoutes');

router.use('/users', userRoutes);
router.use('/form', formRoutes);
router.uuse('/review', reviewRoutes)

module.exports = router;