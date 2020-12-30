const { Router } = require('express')
const { addContribution } = require('../../controllers/contributions')
const { contributionValidationSchema } = require('../../helpers/validation_schema')

const route = Router()

route.post('/addContribution', async (req, res) => {
    try {
        const data = await contributionValidationSchema.validateAsync(req.body)
        const result = await addContribution(data.festival_id, data.room_id, data.amount)

        let response = {
            error: false,
            message: "Contribution added successfully",
            result: result
        }

        res.send(response)
    } catch (error) {
        res.send({
            error: true,
            message: error.message
        })
    }
})

module.exports = route