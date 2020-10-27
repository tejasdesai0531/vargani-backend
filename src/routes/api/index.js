const { Router } = require('express')

const route = Router()

route.use('/member', require('./member'))




module.exports = route