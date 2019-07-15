var loops = new Promise(function (resolve, reject) {
    var i = 0;
    while(i < 100) {
        i++;
        console.log(i);
    }
    resolve("done");
});

loops.then(function(value) {
    console.log(value);

    badExample();
});

// This is the last thing
function badExample () {
    console.log("I'm finished");
}