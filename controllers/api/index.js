const router = require('express').Router();
const userRoutes = require('./userRoutes');
const formRoutes = require('./formRoutes');

router.use('/users', userRoutes);
router.use('/form', formRoutes);

module.exports = router;