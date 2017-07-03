var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (option) {

  var dataString = ''

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');

    response.on('data', function(data) {
      dataString += data.toString()
    });

    response.on('end', function() {
    console.log(dataString);
    });
  });
}

getAndPrintHTML(requestOptions)