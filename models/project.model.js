import mongoose from "mongoose"

const Project = new mongoose.Schema({
    creation_date: {
        type: Date,
        default: Date.now
    },
    project_name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    user_id:{
        type: String,
        required: true
    },
    client_id:{
        type: String,
        required: true
    },
    account_manager_id:{
        type: String,
        required: false
    },
    tasks:{
        type: Array,
        required: false
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

export default mongoose.model('Project', Project)