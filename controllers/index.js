const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const formRoutes = require('./form-routes');
const profileRoutes = require('./userProfile-routes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/profile', profileRoutes)
router.use('/form', formRoutes)

module.exports = router;