var mysql = require('mysql');
var request = require('request'); // You might need to npm install the request module!
var expect = require('chai').expect;

describe('Persistent Node Chat Server', function() {
  var dbConnection;

  beforeEach(function(done) {
    dbConnection = mysql.createConnection({
      user: 'root',
      password: '',
      database: 'chat'
    });
    dbConnection.connect();

    var tablename = 'messages'; // TODO: fill this out

    dbConnection.query('truncate ' + tablename, done);
  });

  afterEach(function() {
    dbConnection.end();
  });

  it('Should insert posted messages to the DB', function(done) {
    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3001/classes/users',
      json: { username: 'Valjean' }
    }, function () {
      request({
        method: 'POST',
        uri: 'http://127.0.0.1:3001/classes/messages',
        json: {
          username: 'Valjean',
          message: 'In mercy\'s name, three days is all I need.',
          roomname: 'Hello'
        }
      }, function () {
        var queryString = 'SELECT * FROM messages';
        var queryArgs = [];

        dbConnection.query(queryString, queryArgs, function(err, results) {
          expect(results.length).to.equal(1);
          expect(results[0].message).to.equal('In mercy\'s name, three days is all I need.');
          done();
        });
      });
    });
  });
  it('Should output all messages from the DB', function(done) {
    var now = Date.now();
    var queryString = `INSERT INTO messages (message, userkey, roomkey, created) VALUES (?, ?, ?, "${now}");`;
    var queryArgs = ['Men like you can never change!', '1', '1'];
    dbConnection.query(queryString, queryArgs, function(err) {
      if (err) { throw err; }
      request('http://127.0.0.1:3001/classes/messages', function(error, response, body) {
        if(error) {
          console.log(error);
        }
        var messageLog = JSON.parse(response.body);
        expect(messageLog[0].message).to.equal('Men like you can never change!');
        expect(messageLog[0].room).to.equal('Hello');
        done();
      });
    });
  });

  it('Should output all messages from the DB using a pyramid of doom', function(done) {
    var now = Date.now();
    dbConnection.query('insert ignore into users (user) values ("Ryan");', (err) => {
      if (err) {
        console.log(err);
      }
      dbConnection.query('insert ignore into rooms (room) values ("main");', (err) => {
        if (err) {
          console.log(err);
        }
        dbConnection.query(`insert into messages (message, userkey, roomkey, created) values ("Men like you can never change!", (select id from users where user="Ryan"), (select id from rooms where room="main"), "${now}");`, (err) => {
          if (err) {
            console.log(err);
          }
          request('http://127.0.0.1:3001/classes/messages', function(err, response, body) {
            if (err) {
              console.log(err);
            }
            var messageLog = JSON.parse(response.body);
            expect(messageLog[0].message).to.equal('Men like you can never change!');
            expect(messageLog[0].room).to.equal('main');
            done();
          });
        });
      });
    });
  });
});
