require('dotenv').config(); //npm install dotenv -> import ".env" file data (module to use global variable hidden to client/hacker)
const express = require('express'); //npm install express
const app = express();
const port = process.env.SERVER_PORT || 8080 //if SERVER_PORT is not define in the .env file set at 8080
const router = require('./routes/routes.js') //create a router for our express server
const mongoose = require('mongoose')
const bodyParser = require("express");

/*
* Step:
* 1 - Connect to the database
* 2 - Define & compile models
* 3 - Define middleware & the routes of the server
* 4 - Start the server
* */



//--- connection to the database [START] ---

mongoose.connect(process.env.DB_URL, (err) => {if(err)console.log(err)});//initiate the connection

dbConnection = mongoose.connection;// get the connection instance

dbConnection.on('error',  console.error.bind(console, 'connection error:'))// if any error(s) display it/them

dbConnection.once('open', () => console.log("Mongoose connected to the database, waiting for queries..."))// notify on connection validation

//--- connection to the database [END] ---







//--- define middlewares [START] ---

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})//for dev purposes to avoid issues with CORS (request localhost:3000 <-> localhost:8080)

app.use(bodyParser.json());//parse body to json format

app.use('/mongodb', router) //apply router middleware from /routes/routes.js -> every route will be : http://localhost:8080/mongodb/routeX

//--- define middlewares [END] ---







//start server on port referenced in .env file
app.listen(port, () => {

    console.log("Server started on http://localhost:"+port)

})
