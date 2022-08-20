const mysql = require("mysql2");
const Promise = require("bluebird");
const db = require('./db.js');
// var create = Promise.promisify(create);

exports.create = (data, callback) => {
  db.query(
    // `INSERT INTO userinfo (sessionid, email, username, password, address, phone, cc, cvv, expiration) VALUES ('${data.cookie}','${data.email}','${data.username}','${data.password}','${data.address}','${data.phone}','${data.cc}','${data.cvv}','${data.expiration}');`,

    'select * from userinfo;',

    //our query needs to update the record in userinfo table where cookie matches
    // `UPDATE userinfo SET (*) WHERE sessionid='${data.cookie}'`,

    function(err, results) {
      if (err) {
        console.log(err)
      } else {
        callback(null, results)
      }
    })
}