var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

exports.userName = function () {

    return new Promise(function (resolve, reject) {
        rl.question("What is your username:\n", function(answer) {
            resolve(answer);
        });
    });
}

exports.weatherQuestion = function () {

    return new Promise(function (resolve, reject) {
        rl.question("What is the weather today?\n", function(answer) {
            rl.close();
            resolve(answer);
        });
    });
}


