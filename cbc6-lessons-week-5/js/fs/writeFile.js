var fs = require('fs');

exports.wf = function(data) {
    fs.appendFile('db.txt', data, function (err) {
        if(err) {
            reject(err);
        } 

        return new Promise(function (resolve, reject) {
            resolve("done Writing File");
        })
    });
}
