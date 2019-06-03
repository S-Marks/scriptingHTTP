function getHTML (options, callback) {

  var https = require('https');

    https.get(options, function(response) {
      var buffer = "";
      response.on('data', function(chunk) {
        callback(buffer += chunk);
      })
    });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)
