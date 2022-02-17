import mongoose from "mongoose"

const Client = new mongoose.Schema({
    creation_date: {
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: false
    },
    telephone: {
        type: Number,
        required: false
    },
    user: {
        type: String,
        required: true
    }

})

export default mongoose.model('Client', Client)
