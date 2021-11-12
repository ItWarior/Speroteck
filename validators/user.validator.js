const Joi = require('joi');

const EMAIL_REGEXP = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$');

const userValidator = Joi.object({
    name: Joi.string().min(2).max(30)
        .trim()
        .required(),
    surname: Joi.string().min(2).max(30)
        .trim()
        .required(),
    age: Joi.number().min(18).max(120),
    email: Joi.string().regex(EMAIL_REGEXP).trim().required(),
})


module.exports = {
    userValidator
}
