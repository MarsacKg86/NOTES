var fs = require("fs");

exports.files = function(resource) {
  return fs.readFileSync(resource);
}

exports.defaultResponse = fs.readFileSync('./index.html');
