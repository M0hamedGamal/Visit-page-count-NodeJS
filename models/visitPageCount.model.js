const mongoose = require('mongoose')
const {Schema} = mongoose

const visitPageCounterSchema = new Schema({
    page: {
        type: String,
        required: true,
    },
    visit: {
        type: Number,
        required: true,
    }
})


const VisitPageCountModel = mongoose.model('visitPageCounter.collections', visitPageCounterSchema)


module.exports = VisitPageCountModel