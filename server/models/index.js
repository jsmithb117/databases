var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      db.query('SELECT messages.message, messages.created, users.user, rooms.room FROM messages JOIN users ON users.id = messages.userkey JOIN rooms ON rooms.id = messages.roomkey;', (err, data) => {
        if (err) {
          throw err;
        }

        cb(data);
      });
    }, // a function which produces all the messages
    post: function (data, cb) {
      var now = Date.now();
      db.query(`INSERT INTO rooms (room) VALUES ("${data.roomname}");`, 
        db.query(`INSERT INTO messages (message, userkey, roomkey, created)
                  VALUES 
                    ("${data.message}",
                    (SELECT id FROM users WHERE user ="${data.username}"),
                    (SELECT id FROM rooms WHERE room ="${data.roomname}"),
                    "${now}");`,
        cb)
      );

    } // a function which can be used to insert a message into the database
  },

  users: {
    get: function () {
    },
    post: function (data, cb) {
      db.query(`INSERT INTO users (user) VALUES ("${data.username}");`, cb);
    }
  }
};
