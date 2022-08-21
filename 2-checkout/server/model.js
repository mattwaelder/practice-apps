const mysql = require("mysql2");
const Promise = require("bluebird");
const db = require('./db.js');
// var create = Promise.promisify(create);

exports.create = (data, callback) => {
  db.query(
    // `INSERT INTO userinfo (sessionid, email, username, password, address, phone, cc, cvv, expiration) VALUES ('${data.cookie}','${data.email}','${data.username}','${data.password}','${data.address}','${data.phone}','${data.cc}','${data.cvv}','${data.expiration}');`,

    `INSERT INTO userinfo (sessionid, email, username, password, address, cc, cvv, expiration) VALUES (
      '${data.cookie}',
      '${data.email}',
      '${data.username}',
      '${data.password}',
      '${data.address1} ${data.address2} ${data.city} ${data.state}, ${data.zip}',
      '${data.cc}',
      '${data.cvv}',
      '${data.expiration}'
    );`,
    function(err, results) {
      if (err) {
        console.log(err)
      } else {
        callback(null, results)
      }
    })
}