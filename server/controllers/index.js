var models = require('../models');
var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('controller get messages');
      // console.log(res.json());
      res.send('get messages');
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('controller.messages.post()');
      console.log (req.body);
      var now = Date.now();
      db.query(`INSERT INTO messages (message, user, room, created) 
                VALUES (${req.body.message}, ${req.body.username}, ${req.body.roomname}, ${now});`);
      var data = req.body;
      
      res.send();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('controller get users');
      // console.log(res.json.body());
      res.send('get users');
    },
    post: function (req, res) {
      console.log('controller get users');
      db.query(`INSERT INTO users (username) 
                VALUES (${req.body.username});`);
      res.send();
    }
  }
};

