const express = require('express');
const blogPostController = require('../Controllers/blogPost.controller');
const { validateBlogPost } = require('../middlewares/blogPostValidation');
const { validateToken } = require('../middlewares/validateToken');

const router = express.Router();
router.post('/', validateToken, validateBlogPost, blogPostController.addBlogPost);

module.exports = router;