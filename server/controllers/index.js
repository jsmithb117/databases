var models = require('../models');
var db = require('../db');
const { messages } = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('controller get messages');
      console.log(req.body);
      models.messages.get( (data) => {
        console.log ('line 11 controllers/index: ', data);
        res.send(data);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, () => {
        res.send();
      });

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
      models.users.post(req.body, () => {
        res.send();
      });
    }
  }
};

