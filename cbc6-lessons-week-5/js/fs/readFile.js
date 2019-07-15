var fs = require('fs');

exports.rf = function () {
    fs.readFile("./db.txt", function(error, data) {
        if(error) {
            console.log(error);
            return;
        }
    
        console.log(data);
    });   
    
}