const express = require('express');
const blogPostController = require('../Controllers/blogPost.controller');
const { validateBlogPost } = require('../middlewares/blogPostValidation');
const { validateToken } = require('../middlewares/validateToken');
const idValidator = require('../middlewares/idValidation');
const editPostValidator = require('../middlewares/editPostValidation');

const router = express.Router();
router.post('/', validateToken, validateBlogPost, blogPostController.addBlogPost);
router.get('/:id', validateToken, idValidator, blogPostController.getBlogPostById);
router.put('/:id', validateToken, idValidator, editPostValidator, blogPostController.editPost);
router.get('/', validateToken, blogPostController.getAllBlogPosts);
router.delete('/:id', validateToken, idValidator, blogPostController.deletePost);

module.exports = router;