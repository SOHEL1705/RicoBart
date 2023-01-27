import mongoose, { Schema } from "mongoose";
const {Schema}=mongoose
const UserShema = new Schema({
    name:{
        type: String,
        required:true
        
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type : String,
        required:true
    },
   
})
const User = mongoose.model('user',UserShema)
export default User