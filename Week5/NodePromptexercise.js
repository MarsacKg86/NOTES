var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name?\n", function(answer) {
    response1(answer);
    rl.question("How old are you?\n", function(answer){
        response2(answer);
        rl.question("Where were you born?\n", function(answer){
            response3(answer);
            rl.close();
        });
    });    
}); 

function response1(value) {
    console.log(value + " What a pretty name");
}
function response2() {
    console.log("?!?!....Wow you're old");
}
function response3(value){
    console.log("I've always wanted to visit " + value);
}



