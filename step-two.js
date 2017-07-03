var https = require('https');

function getAndPrintHTML () {

  var dataString = ''

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

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

getAndPrintHTML()