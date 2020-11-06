const { Router } = require('express')
const { addFestival, editFestival, getAllFestivals } = require('../../controllers/festivals')

const route = Router()

route.post('/addFestival', async (req, res) => {
    try {
        const result = await addFestival(req.body)
        res.send(result)
    } catch (error) {
        res.send({
            error: true,
            message: error.message
        })
    }
})

route.post('/editFestival', async(req, res) => {
    try {
        const result = await editFestival(req.body)
        res.send(result)
    } catch (error) {
        res.send({
            error: true,
            message: error.message
        })
    }
})

route.get('/getAllFestivals', async(req, res) => {
    try {
        const result = await getAllFestivals()
        res.send(result)
    } catch (error) {
        res.send({
            error: true,
            message: error.message
        })
    }
})

module.exports = route