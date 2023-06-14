const express = require('express');
const userControler = require('../Controllers/user.controler');
const { validateUser } = require('../middlewares/userPostValidation');
const { validateToken } = require('../middlewares/validateToken');
const idValidation = require('../middlewares/idValidation');

const router = express.Router();
router.post('/', validateUser, userControler.addUser);
router.delete('/me', validateToken, userControler.deleteUser);
router.get('/:id', idValidation, validateToken, userControler.findUser);
router.get('/', validateToken, userControler.findAllUsers);

module.exports = router;