var mongoose = require('mongoose');

var connectionString = 'mongodb://localhost/test';

mongoose.connect(connectionString);

mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + connectionString);
});

mongoose.connection.on('error',function(error) {
  console.log('Mongoose connected error: ' + error);
});

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected!');
});
