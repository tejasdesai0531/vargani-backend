const Joi = require('joi');

const contributionValidationSchema = Joi.object({
    festival_id: Joi.string().required(),
    room_id: Joi.string().required(),
    amount : Joi.number().min(0).required()
})

const festivalValidationSchema = Joi.when(Joi.ref("$action"), {
    "is": "edit",
    "then": Joi.object().keys({
        "festival_id": Joi.string().required(),
        "name": Joi.string().required(),
        "year": Joi.string().required()
    }),
    "otherwise": Joi.object().keys({
        "name": Joi.string().required(),
        "year": Joi.string().required()
    })
})

const roomValidationSchema = Joi.object({
    "roomNumber": Joi.number().max(0).required(),
    "firstName": Joi.string().required(),
    "lastName": Joi.string().required(),
    "isOwner": Joi.boolean().required
})

module.exports = {
    contributionValidationSchema,
    festivalValidationSchema,
    roomValidationSchema
}