const { blogPostSchema } = require('./joiSchemas');

const validateBlogPost = (req, res, next) => {
    const { error } = blogPostSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
    next();
};

module.exports = {
    validateBlogPost,
};