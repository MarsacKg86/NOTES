"use strict"
 
   
// exercise day3:
 var i= 0;
 function addition (num1, num2){
    var answer1 = num1 + num2;
     console.log(answer1);
 }   

 addition(1,5);

 function multiply (num1){
     var answer2 = num1 * num1;
   return answer2
 }

 console.log(multiply(100));

 function loopNlog () {
   var numS = i;
   var numE = 50;
 for (numS = 0; numS <= numE; numS++){
       console.log(numS);

   }
 } 
 
  loopNlog();    


//Day 3
// // Function Definition
 function wakeUp (time, alarm){
    time & alarm are parameters
     if (alarm){
        turnOffAlarm();
     }
     if (time === 4){
         console.log("whisper: Hit the Gym!");
     }
     else {
        console.log("its too early go back to sleep");
     }
 }
// // Function Expression
 var turnOffAlarm = function () {
     console.log("Turn off Alarm");
 }
// // Call Functions
 wakeUp(4, true);
 wakeUp(12);
/* Above is this example:
Define function wakeup. Takes two parameters, named time and alarm. 
If alarm is true then call the function named turnOffAlarm. 
If the variable time is strictly equal === to the interger 4 then log
to the console a string"whisper: Hit the Gym!", 
else log to the console a different string"its too early go back to sleep".
Next we define a function expression name turnOffAlarm.
When it is called we log to the console a string"Turn off Alarm".
Lastly we call the function wakeup passing one argument that is the 
integer 12.

/* define function before you call aka execute it. 
so definitions at the top and functions at the bottom.
*/

// Day 4 info
/*Pure functions- evaluation has no side effects. 
This is where RETURN comes in.
example: 
function add (a,b){
  return a + b;
}
var added = add (3,1);
console.log(added);

side effect example:
function add (a, b){
  console.log(a, b);
  return a + b;
}
var added = add (3,1);
console.log(added);
What returns do is the output. If arguments are the input then returns are the output.
Also could do:
function add (a, b){
  var answer= a+ b;
  return answer;
}
var added = add (3,1);
console.log(added);
//The console.log at the end is more a trouble shooting than a feature that needs to remain in the code.
You would go back and get rid of the console.log(); when your done with the .js//

//Scope-
local scope- everything between the {}"function's statement block"
global scope- everything outside the {} "function's statement block"
*local can access global but global can NOT access local
//example:
var c = 0;
function add (a,b){
  var answer = a + b;
  var c = 1;
}
*/this would work cause c = 1 can access the global var = 0
Kitchen example:*** \n means next line***/

function pack(forks, knives ){
  if (forks === undefined){
    forks = "no";
  }
    if (knives === undefined){
    knives = "no";
  }  

  return forks + " forks packed\n" + knives + " knives packed\n";
}
console.log(pack(5,8));

//Kitchen example part 2: adding a counter
var knivesCounter = 0;
var forksCounter = 0;

function pack(forks, knives ){
  forks = sanitization(forks);
  knives = sanitization(knives);

  forksCounter += forks;
  knivesCounter += knives;

  if (packedDone()) {
    return packedDone();
  }

  return forks + " forks packed\n" + knives + " knives packed\n";
}

function sanitization(input){
  if (input = undefined){
   return input = 0;
  }
  return input;
}
function packedDone () {
  if (forksCounter >= 5 && knivesCounter >= 5){
    return "We Are All Packed";
  } else { 
    return false;
  }
}

console.log(pack(1,5));
console.log(pack(1));
console.log(pack(3,5));
console.log("forks Number:", forksCounter);
console.log("knives Number:", knivesCounter);

//User Input:
//There is a function that comes with JavaScript called prompt. 
//Its how you can get User Input.
//prompt ();
//example:
var userInput = prompt();
console.log(userInput);

//How to TypeCast/TypeChecking manually:
//There is a function Number(); It will return a number or NaN
//example:
var userInput = prompt();
console.log(Number(userInput));
//It will bring up a prompt window for the user to input a number. 
//If they did a;ldkjsf thats not a number so it would display NaN.

//Math Methods
//off of the window object
//check out w3schools.com page on Math Object
//For random numbers we use Math.random(); 
//Math.floor returns the value of x rounded down to its nearest integer.
//example:
 function randomizer(a){
   return Math.floor(Math.random() * a);
 }
console.log(randomizer(prompt()));

//Characters
//Escape Character-google it'll bring back some cool stuff.
//You'd use these in the console for encoding different strings.
//Character Encoding-UTF8 is the most commonly used. 
//Localization is much less of a concern right now as Jr Dev. -makes more sense
//in regards to SEO and accessibility.
//ASCII - code that maps the characters we use in the USA

//String Methods
//w3school.com
//Length-
console.log(prompt().length);
//it will bring up a prompt that the user would type into and then ok and the console
//would show us the length with an integer.
//charAt- method returns the character at a specified index(position) in a /string.

//example:
var str = "Hello World";
str.charAt(0);
//- this returns H cause its the first letter of the string.
//example2: looping through a string.
var ourInput = prompt();

 console.log(ourInput);
  for(var i=0; i< ourInput.length; i ++) {
      console.log(ourInput[i]);
        if (ourInput[i] === "s"){
        hackedInput += "hacked";
  }     else {
        hackedInput += ourInput[i];
  }
 }
 console.log(hackedInput);

/* excercise day4:
 create a variable in the global scope
create a function that takes an argument
add the argument to the global variable
log the return of that function
 */

  var i = 0;
 function add (i,b){
   var i = 3;
   return i + b;
 }
 var added = add (i,3);
 console.log(add);
 console.log(added);

// create an IIFE that logs your success of creating an IIFE

  (function () {
   var name = "Kat"; 
   console.log(name + " is awesome"); 
 })(); 

 




// create a function that takes user input and compares it against a random number. If there is a match then log the success.
  
function random(){
    var attempt = 0;
    var input = prompt();
    var output = Math.floor(20*Math.random());
      
       if (input == output){
      console.log(input, output, "success");
    }  else {
      console.log(input, output, "WHAMMY");
    }
   for(attempt = 0 ; attempt <= 3; attempt ++){
    if (input === output) {
      console.log("");
    }
    if (attempt++ = input < output){
      console.log(input, output, "too low");
    }
    if (input > output){
      console.log(input, output, "too high");
    }
   }  
} 
random();