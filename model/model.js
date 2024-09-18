import { Schema, model } from "mongoose";

const userdata = new Schema({
    title: { type: String, required: true},
    fname: { type: String, required: true},
    lname: { type: String, required: true},
    phone: { type: Number, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true, unique: true, minlength : 8, maxlength : 15},
    address: {
        
            street : { type: String, required: true},
            city : { type: String, required: true},
            pincode : { type: Number, required: true}
        
    },
    gender : { type: String, required: true},



},{timestamps:true})


export default model("usermodel",userdata)