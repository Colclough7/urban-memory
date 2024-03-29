import mongoose from 'mongoose'


const schema = new mongoose.Schema({
    name:{
        type : String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    status: String
})


export const Userdb = mongoose.model('userdb', schema)


