const mongoose = require("mongoose");
//db = glossary;
mongoose.connect('mongodb://localhost/glossary')
const db = mongoose.connection;
// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
const entrySchema = new mongoose.Schema(
  {
  id: Number,
  word: String,
  definition: String,
  }
)

const Entry = mongoose.model('entry', entrySchema)
// const banana = new Entry({word: "banana", definition: "a yellow fruit"})

///////////////////////////////////////////////////////////

exports.getOne = (data, callback) => {
  console.log('/////////////////////////',data.word)
  return Entry.find({word: data.word})
  .exec()
  .then((result) => {
    console.log(result)
    callback(null, result)
  })
  .catch((err) => console.log(err))
}

exports.getAll = (callback) => {
  return Entry
  .find({})
  .exec()
  .then((data) => {
    callback(null, data)
  })
  .catch((err) => console.log(err))
}

exports.create = (data, callback) => {
  return Entry.update({word: data.word},{word: data.word, definition: data.definition},{upsert: true})
  .exec()
  .then((data) => {
    callback(null, data)
  })
  .catch((err) => console.log(err))
}

exports.delete = (data, callback) => {
  return Entry.deleteMany({word: data.word})
  .exec()
  .then((data) => {
    callback(null, data)
  })
  .catch((err) => console.log(err))
}

console.log(mongoose.connection.readyState)


db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// 3. Export the models
// 4. Import the models into any modules that need them

