import mongoose from "mongoose"

const Task = new mongoose.Schema({
    creation_date: {
        type: Date,
        default: Date.now
    },
    project_id:{
        type: String,
        required: true
    },
    opportunity_id:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    notification_date:{
        type: Date,
        required: false
    },
    delivery_date:{
        type: Date,
        required: false
    },
    user_id:{
        type: String,
        required: true
    },
    responsible_id:{
        type: String,
        required: true
    },
    files:{
        type: Array,
        required: false
    },
    state:{
        type: String,
        required: false
    },
    notes:{
        type: String,
        required: false
    }
})

export default mongoose.model('Task', Task)