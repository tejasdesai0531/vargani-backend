const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    roomNumber: {
        type: Number,
        required: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    isOwner: {
        type: Boolean
    }
},{
    collection : 'Rooms',
    usePushEach: true,
    timestamps : {createdAt: 'created_at', updatedAt: 'updated_at'}
})

module.exports = mongoose.model('Rooms', roomSchema)