// require ('dotenv').config({path  : './.env'})
import dotenv from "dotenv";
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: '../.env'
})

connectDB();













/*
import express from "express";
const app=express(); 

(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        application.on("error",()=>{
            console.log("ERRR: ",error);
            throw error
        })
        application.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT || 3001}`);
        });
    }
    catch(error) {
        console.log("ERROR".error);
        throw err
    }
})()
*/