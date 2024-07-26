const joi = require(joi);

const createValidationSchema = joi.object({
    name:joi.string().min(5).max(6).requred(),
    email:joi.string().require().unique(),
    role:joi.string().required.min(5),
    password: joi.string().required.min(6)
})
const loginValidationSchema = joi.object({

    email:joi.string().require().unique(),

    password: joi.string().required.min(6)
})

module.exports = {createValidationSchema,loginValidationSchema}