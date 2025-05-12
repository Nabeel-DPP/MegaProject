import dotenv from 'dotenv';
import express from 'express';  
import connectDb from './db/db.js';
const app = express();
dotenv.config({
    path:'./env'
})
connectDb().then( ()=>
{
app.listen(process.env.PORT, () => {   
        console.log(`Server is running on port ${process.env.PORT}`);})  
} ).catch(()=>{
    console.log("DB Connection Failed")
})