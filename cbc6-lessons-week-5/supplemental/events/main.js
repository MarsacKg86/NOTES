var events = require('events');
var eventEmitter = new events.EventEmitter();

function shout () {
    console.log("I have fired!");
}

eventEmitter.addListener("run", shout);
eventEmitter.on("run", shout);

eventEmitter.emit("run");