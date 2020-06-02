const mongoose = require('mongoose')

const smartwatchSchema = new mongoose.Schema({
    Imei : {
        type: Number,
        required: true
    },

    Body : {
        type: String,
        required: true
    }
})

exports.SmartWatch = mongoose.model('SmartWatch', smartwatchSchema );