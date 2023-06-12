const express = require('express');

const router = express.Router();
const loginController = require('../Controllers/login.controler');
const validateLogin = require('../middlewares/loginMiddleware');

router.post('/', validateLogin, loginController.login);

module.exports = router;