var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('controller get messages');
      // console.log(res.json());
      res.send('get messages');
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('controller post messages');
      // console.log(res);
      console.log (req.body);
      res.send('post messages');
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
      // console.log(res.json);
      res.send('post users');
    }
  }
};

