const express = require("express");
const app = express();

require('dotenv').config();
const dbConfig = require('./config/dbConfig');

const userRoute = require("./routes/userRoutes");

app.use(express.json());

app.use("/", userRoute);

app.listen(3001, ()=>{
    console.log("Server running");
})