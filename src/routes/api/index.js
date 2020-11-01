const { Router } = require('express')

const route = Router()

route.use('/rooms', require('./rooms'))




module.exports = route