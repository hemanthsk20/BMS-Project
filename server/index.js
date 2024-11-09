const express = require("express");
const cors = require("cors");
const app = express();

require('dotenv').config();
const dbConfig = require('./config/dbConfig');

const userRoute = require("./routes/userRoutes");
const movieRoutes = require("./routes/movieRoutes");
const theatreRoutes = require("./routes/theatreRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/movie", movieRoutes);
app.use("/api/theatre", theatreRoutes);

app.listen(3001, ()=>{
    console.log("Server running");
})