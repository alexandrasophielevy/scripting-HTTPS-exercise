var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function LowerCase(html) {
  var str = html.toLowerCase();
  console.log(str);
}

getHTML(requestOptions, LowerCase);