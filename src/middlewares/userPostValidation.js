const { postUserSchema } = require('./joiSchemas');

const validateUser = (req, res, next) => {
    const { error } = postUserSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
    next();
};

module.exports = {
    validateUser,
};