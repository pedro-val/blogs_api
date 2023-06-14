const blogPostService = require('../Services/blogPosts.service');

const addBlogPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { id } = res.locals.user;
    const post = await blogPostService.addBlogPost({ title, content, userId: id, categoryIds });
    if (post.message) return res.status(400).json(post);
    res.status(201).json(post);
};

const getAllBlogPosts = async (_req, res) => {
    const posts = await blogPostService.getAllBlogPosts();
    res.status(200).json(posts);
};

module.exports = {
    addBlogPost,
    getAllBlogPosts,
};