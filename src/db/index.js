import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{
    try {
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`); //to know which host i am connected to sometimes in production level it changes
    } catch (error) {
        console.log("MONGODB  ERROR: ", error);
        process.exit(1); // For a better client experience, you may want to stop the server here.
    }
}

export default  connectDB;