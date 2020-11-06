const mongoose = require('mongoose')

const festivalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    }
},{
    collection : 'Festivals',
    usePushEach: true,
    timestamps : {createdAt: 'created_at', updatedAt: 'updated_at'}
})

module.exports = mongoose.model('Festivals', festivalSchema)