require("dotenv").config();
const express = require("express");
const path = require("path");

const database = require("./db.js");

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json())

//////////////////////////////////////////////////////////////////////

//how do i make it so localhost:3000/glossary/:query???
/////////////////////////////   GET   ////////////////////////////////

app.get('/search', (req, res) => {
  console.log(`received ${req.method} request`, req.query.word)
  database.getOne(req.query, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send(...data)
    }
  })
})


app.get('/getAll', (req, res) => {
  console.log(`received ${req.method} request`)
  database.getAll((err, data) => {
    if (err) console.log('failed getAll', err);
    res.send(data);
  })
  // return database.getAll((err, data)).then((data) => res.send(data)).catch((err) => console.log(err));
})

/////////////////////////////   POST   ////////////////////////////////

app.post('/create', (req, res) => {
  console.log(`received ${req.method} request`, req.body)
  database.create(req.body, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send('post successful!')
    }
  })
})
/////////////////////////////   DELETE    ////////////////////////////////
app.post('/delete', (req, res) => {
  console.log(`received ${req.method} request to DELETE`, req.body)
  database.delete(req.body, (err, data) => {
    if(err) {
      console.log(err)
    } else {
      res.send('delete successful')
    }
  })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
