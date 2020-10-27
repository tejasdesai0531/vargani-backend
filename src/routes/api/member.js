const { Router } = require('express')
const { addMember } = require('../../controllers/member')

const route = Router()

route.post('/', async (req, res) => {

    try {
        const createdMember = await addMember({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            isOwner: req.body.isOwner
        })

        res.send(createdMember)
    } catch (error) {
        console.log(error.message)
        res.send({
            error: true,
            message: error.message
        })
    }
})


module.exports = route