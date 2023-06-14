const { blogPostSchemaUpdate } = require('./joiSchemas');

const editPostValidator = (req, res, next) => {
    const { error } = blogPostSchemaUpdate.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
    next();
};

module.exports = editPostValidator;