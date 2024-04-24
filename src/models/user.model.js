import mongoose, { Schema } from "mongoose";
import { JsonWebTokenError } from "jsonwebtoken";
import bcrypt from "bcrypt"
//direct encryption is not possible so we use mongoose hooks 

const userSchema = new Schema({
    username: {
        type : String,
        required: true,
        unique : true,
        lowercase : true,
        trim : true,
        index: true
    },
    email: {
        type : String,
        required: true,
        unique : true,
        lowercase : true,
        trim : true
    },
    fullname: {
        type : String,
        required: true,
        lowercase : true,
        trim : true,
        index: true
    },
    avatar:{
        type: String, //cloudinary url
        required: true
    },
    coverImage:{
        type: String, //cloudinary url
    },
    watchHistory:[
        {
            type: Schema.Types.ObjectId,
            ref: " Video"
        }
    ],
    password:{
        type: String,
        required:[true,'Password is required']
    },
    refreshToken:{
        type: String
    }

},{
    timestamps:true
})

userSchema.pre("save",async function (next) {  //here we cannot use fat arrow function beacuse here we won't have reference for 'this' ||also this is a middleware so we needd to pass next
    if(!this.isModified("password")) return next();
    //this bcrypt can do a lot of tasks  but here we are just hashing the password
    //also before encryption we will check if the password provided is correct
    this.password = bcrypt.hash(this.password, 10) // changes password if that field is modified
    next()
}) 

userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password , this.password) //we are giving one password and 1 is accessed via 'this' since methods also have access
}

//JWT is a bearer token - it will give data to whoever sends this token (like a key)

export const User= mongoose.model("User",userSchema)