module.exports = function getHTML (options, callback) {
  var https = require('https');

  var dataString = '';
  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
      dataString += data.toString()
    });

    response.on('end', function() {
      callback(dataString);
    });
  });
};