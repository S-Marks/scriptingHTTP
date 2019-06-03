function getAndPrintHTML() {
  var https = require('https');
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response){
    var buffer = "";
    response.on('data', function(chunk) {
      console.log(buffer += chunk);
    })
  });
}
getAndPrintHTML()
