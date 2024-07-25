import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "../constants.js";
const app=express()
const connectDB=async ()=>{
    try {
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n mongodb connected,${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("ongodb connection error",error)
        process.exit(1)
    }

}
export default connectDB