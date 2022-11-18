import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    message: String,
    email:{
        type: String,
        required: true,
    },


})

export const Contact = new mongoose.model('Contact', schema)