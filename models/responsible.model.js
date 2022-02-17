import mongoose from "mongoose"

const Responsible = new mongoose.Schema({
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
    picture:{
        type: String,
        required: false
    },
    position: {
        type: String,
        required: false
    },
    team: {
        type: Number,
        required: false
    },
    creation_user: {
        type: String,
        required: true
    }

})

export default mongoose.model('Responsible', Responsible)