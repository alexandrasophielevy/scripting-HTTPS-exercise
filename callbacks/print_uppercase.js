var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function UpperCase(html) {
  var str = html.toUpperCase();
  console.log(str);
}

getHTML(requestOptions, UpperCase);