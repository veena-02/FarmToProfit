/** @format */

//import express from 'express' ;
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const mongoose = require("mongoose");
var MongoDBStore = require("connect-mongodb-session")(session);
// const FileStore =require('session-file-store')(session);

//import cors from 'cors';
//import mongoose from 'mongoose';
//require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
var store = new MongoDBStore({
  uri: "mongodb://localhost:27017/connect_mongodb_session_test",
  collection: "mySessions",
});

app.use(cors());
app.use(express.json());
app.use(
  session({
    name: "login", //name to be put in "key" field in postman etc
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,

    cookie: {
      maxAge: 60000000,
      sameSite: "None"
    },
    store: store
    // new FileStore(),
  })
);

const uri = "mongodb://localhost:27017/farmDB";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const loginRouter = require("./routes/login");
const farmerRegistrationRouter = require("./routes/farmerRegistration");
//const contactUsRouter = require('./routes/contactUs');
const lessorRegistrationRouter = require("./routes/lessorRegistration");
const editProfile = require("./routes/editProfile");
let FarmerRegistration = require("./models/farmersSignup.models");
const addEquipment = require("./routes/addEquipment");

app.use("/login", loginRouter);
//app.use('/contactUs', contactUsRouter);
app.use("/farmerRegistration", farmerRegistrationRouter);
app.use("/lessorRegistration", lessorRegistrationRouter);
app.use("/editProfile", editProfile);
app.use("/addvehicle",addEquipment);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
