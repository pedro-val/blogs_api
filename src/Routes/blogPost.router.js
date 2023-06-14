const express = require('express');
const blogPostController = require('../Controllers/blogPost.controller');
const { validateBlogPost } = require('../middlewares/blogPostValidation');
const { validateToken } = require('../middlewares/validateToken');
const idValidator = require('../middlewares/idValidation');

const router = express.Router();
router.post('/', validateToken, validateBlogPost, blogPostController.addBlogPost);
router.get('/:id', validateToken, idValidator, blogPostController.getBlogPostById);
router.get('/', validateToken, blogPostController.getAllBlogPosts);

module.exports = router;