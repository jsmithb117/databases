var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      console.log('model /messages get');
      db.query('SELECT * FROM messages;', (err, data) => {
        if (err) {
          throw err;
        }

        cb(data);
      });
      //do a db call to requset all messages
      //execute the callback, passing in the data that we got from the db call
    }, // a function which produces all the messages
    post: function (data, cb) {
      var now = Date.now();
      db.query(`INSERT INTO rooms (roomname) VALUES ("${data.roomname}");`, 
        db.query(`INSERT INTO messages (message, user, room, created)
                  VALUES 
                    ("${data.message}",
                    (SELECT id FROM users WHERE username ="${data.username}"),
                    (SELECT id FROM rooms WHERE roomname ="${data.roomname}"),
                    "${now}");`,
        cb)
      );

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      console.log('model /users get');
      console.log(req.json);
    },
    post: function (data, cb) {
      //make the db call
      //{username: 'Valjean'}
      db.query(`INSERT INTO users (username) VALUES ("${data.username}");`, cb);
      //execute the callback
    }
  }
};



// INSERT INTO messages (message, user, room, created)
//                   VALUES 
//                     ("This is a message",
//                     (SELECT id FROM users WHERE username ="Valjean"),
//                     (SELECT id FROM rooms WHERE roomname ="Hello"),
//                     "1610661931514");