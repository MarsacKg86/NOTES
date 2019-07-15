var url = require('url');
var {files} = require('./response.js');

exports.Router = function (req) {
    if (url.parse(req.url).query) {
        console.log(url.parse(req.url).query);
    }
    if (url.parse(req.url).pathname === "/index.html") {
        return files("./index.html");
    }
    else if (url.parse(req.url).pathname === "/about.html") {
        return files("./about.html");
    }
    else {
        return ("404");
    }
}