var https = require('https');
module.exports = function getHTML (options, callback) {
  https.get(options, function(response) {
    var buffer = "";
    response.on('data', function(chunk) {
    console.log(buffer += chunk);
    })
  });
};
