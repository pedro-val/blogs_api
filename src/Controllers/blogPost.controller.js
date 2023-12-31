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

const getBlogPostById = async (req, res) => {
    const { id } = req.params;
    const post = await blogPostService.getBlogPostById(id);
    if (post.message) return res.status(404).json(post);
    res.status(200).json(post);
};

const editPost = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const { id: userId } = res.locals.user;
    const post = await blogPostService.editPost(id, title, content, userId);
    if (post.message) return res.status(401).json(post);
    res.status(200).json(post);
};

const deletePost = async (req, res) => {
    const { id } = req.params;
    const { id: userId } = res.locals.user;
    const post = await blogPostService.deletePost(id, userId);
    if (post.message) return res.status(post.status).json(post.message);
    return res.status(204).end();
};

const searchPost = async (req, res) => {
    const { q } = req.query;
    const posts = await blogPostService.searchPost(q);
    res.status(200).json(posts);
};

module.exports = {
    addBlogPost,
    getAllBlogPosts,
    getBlogPostById,
    editPost,
    deletePost,
    searchPost,
};