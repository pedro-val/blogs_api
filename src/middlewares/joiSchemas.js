const joi = require('joi');

const postUserSchema = joi.object({
    displayName: joi.string().min(8).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    image: joi.string(),
}).messages({
    'any.required': 'O campo {#label} é obrigatório',
    'string.min': '{#label} length must be at least {#limit} characters long',
    'string.email': '"email" must be a valid email',
});

module.exports = {
    postUserSchema,
};