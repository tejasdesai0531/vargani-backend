const { Router } = require('express')
const { addRoom, editRoom, getRoom } = require('../../controllers/rooms')

const route = Router()

route.get('/getRoomDetails', async (req, res) => {
    try {
        const result = await getRoom(req.body)
        res.send(result)
    } catch (error) {
        res.send({
            error: true,
            message: error.message
        })
    }
})

route.post('/addRoomDetails', async (req, res) => {

    try {
        const result = await addRoom(req.body)

        res.send(result)

    } catch (error) {
        res.send({
            error: true,
            message: error.message
        })
    }
})

route.post('/editRoomDetails', async (req, res) => {
    try {
        const result = await editRoom(req.body)
        res.send(result)
    } catch (error) {
        res.send({
            error: true,
            message: error.message
        })
    }
})


module.exports = route