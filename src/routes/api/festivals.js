const { Router } = require('express')
const { addFestival, editFestival, getAllFestivals } = require('../../controllers/festivals')
const { festivalValidationSchema } = require('../../helpers/validation_schema')

const route = Router()

route.post('/addFestival', async (req, res) => {
    try {
        const data = await festivalValidationSchema.validateAsync(req.body)
        const result = await addFestival(data.name, data.year)

        let response = {
            error: false,
            message: "Festival added successfully",
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

route.post('/editFestival', async(req, res) => {
    try {
        const data = await festivalValidationSchema.validateAsync(req.body, {"context": {"action": "edit"}})
        const result = await editFestival(data.festival_id, data.name, data.year)
        
        let response = {
            error: false,
            message: "Festival updated successfully",
            result: result
        }
        return response
    } catch (error) {
        res.send({
            error: true,
            message: error.message
        })
    }
})

route.get('/getAllFestivals', async(req, res) => {
    console.log(hii)
    try {
        const result = await getAllFestivals()
        
        let response = {
            error: false,
            festivals: result
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