function getAndPrintHTML (options) {

var https = require('https');

var options = requestOptions

  https.get(options, function(response) {
    var buffer = "";
    response.on('data', function(chunk) {
    console.log(buffer += chunk);
    })
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML()
