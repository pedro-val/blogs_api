const express = require('express');
const categoriesController = require('../Controllers/categories.controller');
const { validateCategory } = require('../middlewares/categoryPostValidation');
const { validateToken } = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateToken, validateCategory, categoriesController.createCategory);

module.exports = router;