import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
import mongoose from "mongoose";
//import auth from './routes/auth';
const morgan = require("morgan");
require("dotenv").config();

// create express app
const app = express();

// apply middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// route

//app.use('/api/auth', auth);


readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));




//Mongo Connection

mongoose
    .connect(
      //  process.env.MONGODB_URL,
      process.env.MONGODB_URL ,
        {
        useNewUrlParser: true,
     
    })
    .then(() => console.log('DB Connected'));


// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
