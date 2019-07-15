var fs = require("fs");

var writeStuff = "My first file write! \n So excited!";


fs.writeFile("myFile.txt", writeStuff ,function(err, data) {
    console.log("Write File is done.");
});

fs.readFile("myFile.txt", function(err, data) {
    console.log(data.toString());
});

fs.appendFile("myFile.txt", "\nAppending!", function(err, data) {
    console.log("We have appended!");
});