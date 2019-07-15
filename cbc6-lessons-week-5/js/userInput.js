var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("What is your name?\n", function(answer) {
    rl.close();

    finished(answer);
});

function finished (value) {
    console.log("Your name must be: " + value);
    stopTimer();
    console.log("We've finished the program");
};

// Counter that counts up while waiting for user input
var i = 0;
var counter = setInterval(timer, 1000);
function timer () {
    console.log(i);
    ++i;
    if (i > 1000) {
        stopTimer();
    } else {
        counter;
    }
}

function stopTimer () {
    clearInterval(counter);
} 