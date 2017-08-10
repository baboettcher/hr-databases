var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // invoke the message's get method  on the model
      models.messages.get(function(data){
        res.end(JSON.stringify(data));
      });

      // if get method is successful, end response and pass in returned data

    }, // a function which handles a get request for all messages

    post: function (req, res) {
      console.log("INCOMING MESSAGE: ", req.body);
      // invoke the model's post method, and pass in the username, text, and room
      models.messages.post(req.body.username, req.body.roomname, req.body.message, function(){
        res.end();
      } );
      // if post method is successful, end response

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      // invoke the user's get method on the model
      // if get method is successful, end response and pass in returned data

    },
    post: function (req, res) {
      // Get username from request
      var username = req.body.username;

      // Add username database using the Model's user POST method
      models.users.post(username, res);

      // End the response with a success code
      // res.end();
    }
  }
};

