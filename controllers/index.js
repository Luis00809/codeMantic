const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const formRoutes = require('./form-routes');
const profileRoutes = require('./userProfile-routes')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/profile', profileRoutes)
router.use('/form', formRoutes)

router.use((req, res) => {
    res.status(404).end();
  });

module.exports = router;