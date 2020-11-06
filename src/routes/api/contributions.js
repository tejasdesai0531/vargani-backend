const { Router } = require('express')
const { addContribution } = require('../../controllers/contributions')

const route = Router()

route.post('/addContribution', async (req, res) => {
    try {
        const result = await addContribution(req.body)
        res.send(result)
    } catch (error) {
        res.send({
            error: true,
            message: error.message
        })
    }
})

module.exports = route