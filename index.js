const express = require('express');
const cors = require('cors');
const { connection } = require('./config/db');
const { userRoutes } = require('./Routes/USer.route');
const {Auth}=require("./middelware/AuthMiddelware.js");
const { calculateRoute } = require('./Routes/calculator.route');
const app = express();
app.use(cors())
// app.use(Auth)
app.use(express.json());
app.use("/user",userRoutes)
app.use("/calculte",calculateRoute)
// new 
app.listen(8080,async()=>{
    try {
        await connection
        console.log("conncted to database")

    } catch (error) {
        console.log(error)
        
    }
    console.log('server is running')
})