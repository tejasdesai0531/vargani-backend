const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    isOwner: {
        type: Boolean
    }
})

module.exports = mongoose.model('Member', memberSchema)