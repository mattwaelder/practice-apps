require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db.js");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

///////////////////////////   ROUTES   ////////////////////////////
app.post('/orders', (req, res) => {
  console.log('received by server')
  // res.send('RECEIVED DATA')

  db.create('hi').then((res) => console.log(res))
})

///////////////////////////////////////////////////////////////////
app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
