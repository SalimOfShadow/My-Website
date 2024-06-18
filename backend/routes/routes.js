const express = require('express');
const router = express.Router();
const loginRoute = require('./loginRoute.js');
const logoutRoute = require('./logoutRoute.js');
const registerRoute = require('./registerRoute.js');
const searchRoute = require('./searchRoute.js');
const resetRoute = require('./resetRoute.js');
const protectedRoutes = require('./protectedRoutes.js');
const verifyRoute = require('./verifyRoute.js');
// TODO  : Redirect to homepage when .get  /
router.get('/', (req, res) => {
	res.send('GET request received on the server, sending response.');
});

// Individual routes

router.use('/', loginRoute);
router.use('/', logoutRoute);
router.use('/', registerRoute);
router.use('/', searchRoute);
router.use('/', resetRoute);
router.use('/', protectedRoutes);
router.use('/', verifyRoute);

// Used for testing

module.exports = router;
