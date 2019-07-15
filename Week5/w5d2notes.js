/* Promises Promises 
The Promise object represents the eventual completion(or failure) of an asynchronous operation and
its resulting value. Node JS by default uses promises. Promise is uppercase. It takes 1 argument.
You are going to put a function inside this Promise object. 

Example:
*/
var counterPromise = new Promise(function(resolve, reject) {
    var i = 0;
  
    while (i < 10 ) {
      console.log(i);
      i++;
    
  }
    resolve("Done");
    
});   
/*To call it you'd to this:*/
counterPromise.then(function(value) {
  console.log(value);
  
});

/* Output on command line should look like this:
PS C:\Users\theClubhou.se\Desktop\code\cbc6-lessons> node w5d2notes.js
0
1
2
3
4
5
6
7
8
9
Done
*/
/*
From geeksforgeeks.org resourse.
Example:
*/
var promise = new Promise(function(resolve, reject) { 
    const x = "geeksforgeeks"; 
    const y = "geeksforgeeks"
    if(x === y) { 
      resolve(); 
    } else { 
      reject(); 
    } 
  }); 
    
  promise. 
      then(function () { 
          console.log('Success, You are a GEEK'); 
      }). 
      catch(function () { 
          console.log('Some error has occured'); 
      }); 
/*Output looks like this:
PS C:\Users\theClubhou.se\Desktop\code\cbc6-lessons> node w5d2notes.js
Success, You are a GEEK

--Promise Consumers
Promises can be consumed by registering functions using .then and .catch methods.

then()
then() is invoked when a promise is either resolved or rejected.
Parameters: 
then() method takes two functions as parameters.
First function is executed if promise is resolved and a result is received.
Second function is executed if promise is rejected and an error is received. (It is optional and there is a better way to handle error using .catch() method

Syntax:*/
.then(function(result){
        //handle success
    }, function(error){
        //handle error
    })
// Example: Promise Resolved

var promise = new Promise(function(resolve, reject) { 
    resolve('Geeks For Geeks'); 
}) 
  
promise 
    .then(function(successMessage) { 
       //success handler function is invoked 
        console.log(successMessage); 
    }, function(errorMessage) { 
        console.log(errorMessage); 
    }) 
/*Output:
Geeks For Geeks

Examples: Promise Rejected*/

var promise = new Promise(function(resolve, reject) { 
    reject('Promise Rejected') 
}) 
  
promise 
    .then(function(successMessage) { 
        console.log(successMessage); 
    }, function(errorMessage) { 
       //error handler function is invoked 
        console.log(errorMessage); 
    }) 
/*Output:
Promise Rejected

-catch()
catch() is invoked when a promise is either rejected or some error has occured in execution.
Parameters: 
catch() method takes one function as parameter.
Function to handle errors or promise rejections.(.catch() method internally calls .then(null, errorHandler), i.e. .catch() is just a shorthand for .then(null, errorHandler) )

Syntax:
.catch(function(error){
        //handle error
    })

Examples: Promise Rejected    
*/
var promise = new Promise(function(resolve, reject) { 
    reject('Promise Rejected') 
}) 
  
promise 
    .then(function(successMessage) { 
        console.log(successMessage); 
    }) 
    .catch(function(errorMessage) { 
       //error handler function is invoked 
        console.log(errorMessage); 
    }); 
/*Output:    
Promise Rejected

Examples: Promise Rejected
*/
var promise = new Promise(function(resolve, reject) { 
    throw new Error('Some error has occured') 
}) 
  
promise 
    .then(function(successMessage) { 
        console.log(successMessage); 
    }) 
    .catch(function(errorMessage) { 
       //error handler function is invoked 
        console.log(errorMessage); 
    }); 
/*Output: 
Error: Some error has occured
*/
/*Node User Input
readline is a built in module inside node.js and provides an interface for reading data from a Readable stream(such as process.stdin) on line at a time. */

var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("What is your name?/n", function(answer) {
    console.log("Your name must be: " + answer);
    rl.close();
});
 

