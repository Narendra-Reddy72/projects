const joi = require('joi');

const createValidationSchema = joi.object({
    name:joi.string().min(5).max(30).required(),
    email:joi.string().required().email(),
    role:joi.string().required().min(5),
    password: joi.string().required().min(6)
})
const loginValidationSchema = joi.object({

    email:joi.string().required().email(),

    password: joi.string().required().min(6)
})

module.exports = {createValidationSchema,loginValidationSchema}