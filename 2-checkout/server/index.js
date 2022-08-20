require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
// var bodyParser = require('body-parser')


const model = require('./model.js')

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);
app.use(express.json())

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// app.use(bodyParser);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

///////////////////////////   ROUTES   ////////////////////////////
app.post('/orders', (req, res) => {
  console.log(`${req.method} request received`, req.body)
  model.create(req.body, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send("received request")
    }
  })
})

///////////////////////////////////////////////////////////////////
app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
