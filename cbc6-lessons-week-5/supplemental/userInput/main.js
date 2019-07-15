var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var question1 = function () {

    return new Promise(function(resolve, reject) {
        rl.question("What is your username? ", function(answer) {
            resolve(answer);
        });
    });
    
}

var question2 = function () {

    return new Promise(function(resolve, reject) {
        rl.question("What is your favorite season? ", function(answer) {
            rl.close();
            resolve(answer);
        });
    });
    
}

function response (answer) {
    console.log(answer);
}



question1()
    .then(response)
    .then(question2)
    .then(response);