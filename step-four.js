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
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML())