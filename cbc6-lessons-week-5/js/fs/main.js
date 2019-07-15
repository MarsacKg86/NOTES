var { rf } = require('./readFile.js');
var { wf } = require('./writeFile.js');

var { userName, weatherQuestion } = require('./input.js');

var output = "";

userName()
    .then(function(userName) {
        output += userName;
    })
    .then(weatherQuestion)
    .then(function(answer) {
        output += ": " + answer + "\n";
    })
    .then(function () {
        wf(output);
    })