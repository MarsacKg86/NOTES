/* Node events Module
Although events look squite similar to callbacks, the difference lies in the fact that callback 
functions are called when an asynchronus function returns its result, whereas event handling works
on the observer pattern. This is all on tutorialspoint.com under node.js -event loop
Imports events module:
*/
var events = require('events');
var eventEmitter = new events.EventEmitter();
/* Following is the syntax to vind an event handler with an event-*/
eventEmitter.on('eventName','eventHandler');
/*We can fire an event programmatically as follows;*/
eventEmitter.emit('eventName');
/*EXAMPLE: Create a js file named main.js with the following code-*/
//Import events module
var events = require('events');

//Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

//Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
  
//Fire the data_received event 
   eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
 
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {
   console.log('data received succesfully.');
});

// Fire the connection event 
eventEmitter.emit('connection');

console.log("Program Ended.");

//Now let's try to run the above program in CLI and check its output −
//node main.js
//IT should produce the following result −

connection successful.
data received successfully.
Program Ended.

/*still in tutorialspoint.come under node.js file system-
Don't create infinite loops inside your file system. 
Example of Opening a File- Let us create a js file named main.js having the following code to 
open a file input.txt for reading and writing.
*/
var fs = require('fs');
// Asynchronous - Opening File
console.log("Going to Open File!");
fs.open('input.txt', 'r+', function(err, fd){
    if (err) {
        return console.error(err);
    }
    console.log("File Opened Successfully!");
});


