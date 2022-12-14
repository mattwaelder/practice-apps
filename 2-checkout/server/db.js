const mysql = require("mysql2");
const Promise = require("bluebird");

// let create = Promise.promisify(create)

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

//multiArgs sets output to array of promises which fullfil to success values
const db = Promise.promisifyAll(connection, { multiArgs: true });

//this sets up the tables automatically (its in place of the .sql...)
db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:


    db.queryAsync(
      // "select * from userinfo"
      "CREATE TABLE IF NOT EXISTS responses (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY)"
    )

  )
  .catch((err) => console.log('IN DB CONNECTION ERR',err));

module.exports = db;


//module.exports is db object, which seems to be all of the promises from this module
//stacked in one. any new methods/promises should also be attached to db...