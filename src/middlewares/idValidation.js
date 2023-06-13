const { idSquema } = require('./joiSchemas');

const idValidator = async (req, res, next) => {
    const { error } = idSquema.validate(req.params);
    if (error) return res.status(400).json({ message: error.details[0].message });
    next();
};

module.exports = idValidator;