// Node.js is a library. We can now have access to your computer not just the browser. That sounds very ominous. 
// Anything you could do on command line you can now do via Node.js.

/*
MAKE SURE YOU HAVE THE MOST CURRENT NODE VERSION INSTALLED :)
To check and see, go to your command line and type in 
node -v and it should pop up which version you have.

What Can Node.js Do?
Node.js can generate dynamic page content
Node.js can create, open, read, write, delete, and close files on the server
Node.js can collect form data
Node.js can add, delete, modify data in your database

What is a Node.js File?
Node.js files contain tasks that will be executed on certain events
A typical event is someone trying to access a port on the server
Node.js files must be initiated on the server before having any effect
Node.js files have extension ".js"


**Just gonna work in the command line for today**
We are learning how to export a function in file2 by referencing it inside the file1 and then in the command line we are going to use node to see that the function has been exported from file2 into file1.
We are going to create 2 files for this example. 1st will be your main file that will "require" the function from your 2nd file. You of course can choose to name these whatever you'd like but for reference here is how I did it:

Use the exports keyword to make properties and methods available outside the module file.
 
file 1-main.js*/

 "use strict"
var test = require('./anotherFile');

console.log(test);

/*file 2-anotherFile.js*/

"use strict"
exports.myDateTime = function () {
    return Date();
  };

/*In your fav command line (mine is Powershell) make sure you are in the correct directory for 
were you saved these files. For me I saved them to the Desktop. So for me this is where I navigated:*/
PS C:\Users\theClubhou.se\Desktop>
/* Now we want to use node to get the correct file
You want to type node space then the file name*/
PS C:\Users\theClubhou.se\Desktop> node main.js
/*The output will look like this:*/
{ myDateTime: [Function] }
/*WOOHOO Victory!!! we know that the function myDateTime is inside file1!!! It got there thanks to exports!!!
Hope that made sense :)
*/

/* After Lunch
So still using node on the command line. We want to reference a main file. These files will return strings on the command line. Just some 
extra content for us to verify that we know how to export and import.


  Example 
  JAMES BROWN WEBSITE
Ok so we're gonna have a few files to make this work.
Need a main one. Let's call it james.js
Then we need js pages for each export.
-need an about us page file. Let's call it aboutusjames.js
-need a contact page file. Let's call it contactjames.js
-for fun lets add an error page. Let's call that 404.js

our james.js 
looks like this:
*/
"use strict"


var { about } = require("./aboutusjames.js");
var { contact } = require("./contactjames.js");
var { error } = require("./404.js");
/*
So what's with all the { }? (Jerry Seinfield voice)
We just use { } to name the variable as the function from the other 
 pages. 
 As you can see after each exports. the name of the function is the same as the variable inside the { }
 This makes our lives easier once we start to console.log.
 Imagine all this nested nonsense and having to blah.blah.blah() inside a console.log, ugh gross. Now we can "defragment" it with { }
 to save us some time and pain in the future no matter how complex our nested files become.
*/

var James = "tall";
console.log("Welcome To Our Page.");


if (James === "tall") {
    console.log(about());
}
/*
so since we have our var James = "tall" we should get the string from the return on our aboutusjames.js logged in the command line as well 
as the "Welcome To Our Page."
To check let's go over to CLI and make sure we are in the correct 
directory. Once we have cd to the right one type node james.js and lets see what we get.
*/
else if (James === "short"){
    console.log(contact());
}
else {
    console.log(error());
}
/*
our aboutusjames.js
looks like this:
*/
exports.about = function(){
  return "This Page is All About James Brown"
}
/*
our contactjames.js
looks like this:
*/
exports.contact = function(){
  return "Contact Us At This Number..."
}
/*
our 404.js
looks like this:
*/
exports.error = function(){
  return "ERROR Page Not Found ERROR"
}

/* 
If you change the var James to "short" and type node james.js into the CLI it should read 
Welcome To Our Page.
Contact Us At This Number...

If you change the var James to "" literally anything other than "tall" or "short" and type node james.js it should read
Welcome To Our Page.
ERROR Page Not Found ERROR
*/
