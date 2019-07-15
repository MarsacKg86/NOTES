var events = require('events');
var { weatherQuestion } = require('./input.js');

var eventEmitter = new events.EventEmitter();

// Event Listeners
eventEmitter.on('sunny', sunHandler);
eventEmitter.on('rainy', function () {
    console.log("oops forgot my umbrella");
});
eventEmitter.on('snowy', function () {
    console.log("Too cold not coming to class");
});

// Handler Functions
function sunHandler () {
    console.log('Apply sun block');
}

function weatherHandler(weather) {
    switch(weather) {
        case 'sunny':
            eventEmitter.emit('sunny');
            break;
        case 'rainy': 
            eventEmitter.emit('rainy');
            break;
        case 'snowy':
            eventEmitter.emit('snowy');
            break;
        default:
            console.log("Weather unspecified");
            break;
    }
}

weatherQuestion()
    .then(function(value) {
        weatherHandler(value);
    })
