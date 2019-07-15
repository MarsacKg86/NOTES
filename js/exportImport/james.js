"use strict"


var { about } = require("./aboutusjames.js");
var { contact } = require("./contactjames.js");
var { error } = require("./404.js");


var James = "tall";
// console.log("Welcome To Our Application.");

// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//             console.log(loadDoc);
//       }
//     };
//     xhttp.open("GET", "james.html", true);
//     xhttp.send();
//   }
fetch('james.html')
    .then(function(response) {
        // When the page is loaded convert it to text
        return response.text()
    })

    

if (James === "tall") {
    console.log(about());
}
else if (James === "short"){
    console.log(contact());
}
else {
    console.log(error());
}

