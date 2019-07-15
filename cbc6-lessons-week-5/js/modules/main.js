// var { funkLvl } = require('./James.js');
var { about } = require('./about.js');
var { contact } = require("./contact.js");
var { notFound }  = require("./404.js");

var James = "short";


console.log("Welcome to our application. This is our james brown application");

if(James === "tall") {
    console.log(about());

} else if(James === "short") {  
    console.log(contact());

} else {
    console.log(notFound);
}