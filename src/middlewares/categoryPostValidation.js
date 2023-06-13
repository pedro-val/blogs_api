const { categoriesSchema } = require('./joiSchemas');

const validateCategory = async (req, res, next) => {
    const { error } = categoriesSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
    next();
};

module.exports = {
    validateCategory,
};