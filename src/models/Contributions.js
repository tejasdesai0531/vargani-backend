const mongoose = require('mongoose')

const contributionSchema = new mongoose.Schema({

    room_id: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rooms' 
    },
    festival_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Festivals' 
    },
    amount: {
        type: Number,
        required: true
    }

},{
    collection : 'Contributions',
    usePushEach: true,
    timestamps : {createdAt: 'created_at', updatedAt: 'updated_at'}
})

module.exports = mongoose.model('Contributions', contributionSchema)