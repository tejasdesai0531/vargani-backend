const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    roomNumber: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    isOwner: {
        type: Boolean,
        required: true
    }
},{
    collection : 'Rooms',
    usePushEach: true,
    timestamps : {createdAt: 'created_at', updatedAt: 'updated_at'}
})

module.exports = mongoose.model('Rooms', roomSchema)