const mongoose = require('mongoose')

const PointSchema = new mongoose.Schema({ //POINT Retirado da DOCUMENTAÇÃO do MONGOOSE
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true,
    }
})

module.exports = PointSchema;