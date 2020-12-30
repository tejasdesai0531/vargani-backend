const { Router } = require('express')
const { addRoom, editRoom, getRoom } = require('../../controllers/rooms')
const { roomValidationSchema } = require('../../helpers/validation_schema')

const route = Router()

route.get('/getRoomDetails', async (req, res) => {
    try {
        const result = await getRoom(req.body)
        
        let response = {
            error: false,
            roomDetails: result
        }

        res.send(response)
    } catch (error) {
        res.send({
            error: true,
            message: error.message
        })
    }
})

route.post('/addRoomDetails', async (req, res) => {

    try {
        const data = roomValidationSchema.validateAsync(req.body)
        const result = await addRoom(data.roomNumber, data.firstName, data.lastName, data.isOwner)

        let response = {
            error: false,
            message: "Room created successfully",
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

route.post('/editRoomDetails', async (req, res) => {

    try {
        const data = roomValidationSchema.validateAsync(req.body)
        const result = await editRoom(data.roomNumber, data.firstName, data.lastName, data.isOwner)
        
        let response = {
            error: false,
            message: "Room updated successfully",
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


module.exports = route