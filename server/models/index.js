var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('model /messages get');
      console.log(req.json);
    }, // a function which produces all the messages
    post: function () {
      console.log('model /messages post');
      console.log(req.json);
      res.statusCode = (200);
      res.send('Okay');
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      console.log('model /users get');
      console.log(req.json);
    },
    post: function () {
      console.log('model /users post');
      console.log(req.json);
    }
  }
};



