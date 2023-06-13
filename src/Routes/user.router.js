const express = require('express');
const userControler = require('../Controllers/user.controler');
const { validateUser } = require('../middlewares/userPostValidation');
const { validateToken } = require('../middlewares/validateToken');

const router = express.Router();
router.post('/', validateUser, userControler.addUser);
router.get('/', validateToken, userControler.findAllUsers);

module.exports = router;