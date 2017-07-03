module.exports = function getHTML (options, callback) {
  var https = require('https');
  function getHTML (options, callback) {
    var dataString = ''

    https.get(requestOptions, function(response) {
      response.setEncoding('utf8');

      response.on('data', function(data) {
        dataString += data.toString()
      });

      response.on('end', function() {
        printHTML(dataString);
      });
    });
  };
};