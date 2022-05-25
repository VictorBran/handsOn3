const { validate, Joi } = require("express-validation");

module.exports = validate({
    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),        
        data_nascimento: Joi.date().greater('12-31-1899').iso().required()
    })
})