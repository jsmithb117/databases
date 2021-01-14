var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


// var db = {
//   mysql.createConnection: () =>({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'chat'
// }),
//   connect: (function(err) {
//     if (err) {
//       throw err;
//     }
//     console.log('Connected!');
//   // var sql = 'INSERT INTO customers (name, address) VALUES ("Company Inc", "Highway 37")';
//   // db.query(sql, function (err, result) {
//   //   if (err) throw err;
//   //   console.log('1 record inserted');
//   // });
// })




var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});

// db.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

module.exports.db = db;