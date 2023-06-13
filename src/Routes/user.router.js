const express = require('express');
const userControler = require('../Controllers/user.controler');
const { validateUser } = require('../middlewares/userPostValidation');

const router = express.Router();
router.post('/', validateUser, userControler.addUser);

module.exports = router;