const { Router } = require('express')

const route = Router()

route.use('/rooms', require('./rooms'))
route.use('/festivals', require('./festivals'))
route.use('/contributions', require('./contributions'))

module.exports = route