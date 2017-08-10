var db = require('../db');

module.exports = {

  messages: {
    get: function (callback) {
      // query the database for messages,
      db.query('SELECT * FROM messages', function(err, data) {
        if (err) {
          console.log("---> ERROR: ", err);
        } else {
          // if query is successful, invoke callback passing the return data
          callback(data);
          console.log("---> SUCCESS! DATA: ", data);
        }
      });

    }, // a function which produces all the messages

    post: function (username, room, message, callback) {
      // get the id of username (done in controller)

      // query the user table of the database for the id that matches the username
      db.query('SELECT id FROM users WHERE name=?', [username], function(err, data){
        var userId = data[0].id;
        console.log("USER ID:", userId, username);

        var queryArgs = [userId, room, message];
        // add the message to the database using a query
        db.query('INSERT INTO messages (user, roomname, text) VALUES (?, ?, ?)', queryArgs, function(err){
          if (err){
            console.log("ERROR: ", err);
          } else {
            console.log("SUCCESSFULLY POSTED MESSAGE");
            callback();
          };
        })


      // invoke the callback

      });

    }// a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      // query the database for users,
      // if query is successful, invoke callback passing the return data
    },

    post: function (username, response){
      // define queryString as insert command
      //var queryString = 'INSERT INTO users (name) VALUES ("Valjean")';
      var queryString = 'INSERT INTO users (name) VALUES ("'+ username + '")';

      db.query(queryString, function(err){
        if (err) {console.log("---> ERROR: ", err);
      } else {
        response.end();
        console.log("---> SUCCESS!");
      }

      });

      // define arguments as username


      console.log("models-->users-->post:", username);

    }
  }
};

