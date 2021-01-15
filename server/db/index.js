var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

const dBcon = mysql.createPool({
  connectionLimit: 50,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});

dBcon.connect = (err) => {
  if (err) {
    throw err;
  }
  console.log('Connected!');
};

module.exports = dBcon;