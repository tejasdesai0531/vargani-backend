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
},{
    collection : 'Member',
    usePushEach: true,
    timestamps : {createdAt: 'created_at', updatedAt: 'updated_at'}
})

module.exports = mongoose.model('Member', memberSchema)