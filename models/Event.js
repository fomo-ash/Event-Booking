const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    booked: {
        type: Number,
        default: 0
    }

})

module.exports = mongoose.model('Event', eventSchema)