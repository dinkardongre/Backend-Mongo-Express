// require('dotenv').config({path: './.env'});
import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({ path: './.env' });

connectDB()
.then(()=>{
    app.on("error", (error)=>{
        console.log("Before listen ERR:", error);
        throw error
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(` Server is running at port :${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!! ", err)
})






/*
import express from "express";

const app = express();

(async ()=>{
    try{
       await mangoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

       app.on('error', (err) => {
           console.error("Server error:", err);
           throw err;
    })

        app.listen(process.env.PORT, () => {
              console.log(`Server is running on port ${process.env.PORT}`);
         });
    }catch(err){
        console.error("Error connecting to MongoDB:", err);
        throw err;
    }
})()
*/