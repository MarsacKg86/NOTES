// AJAX
/* AJAX Example Explained
What is AJAX?
AJAX = Asynchronous JavaScript And XML.
AJAX is not a programming language.
AJAX just uses a combination of:

A browser built-in XMLHttpRequest object (to request data from a web server)
JavaScript and HTML DOM (to display or use the data)
AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.

AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

*****HTML Page*****
<!DOCTYPE html>
<html>
<body>

<div id="demo">
  <h2>Let AJAX change this text</h2>
  <button type="button" onclick="loadDoc()">Change Content</button>
</div>

</body>
</html>

The HTML page contains a <div> section and a <button>.
The <div> section is used to display information from a server.
The <button> calls a function (if it is clicked).
The function requests data from a web server and displays it:
Function loadDoc()
*/
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}
/*
The keystone of AJAX is the XMLHttpRequest object.
The XMLHttpRequest Object
All modern browsers support the XMLHttpRequest object.
The XMLHttpRequest object can be used to exchange data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

Create an XMLHttpRequest Object
All modern browsers (Chrome, Firefox, IE7+, Edge, Safari, Opera) have a built-in XMLHttpRequest object.

Syntax for creating an XMLHttpRequest object:
*/variable = new XMLHttpRequest();
Example
var xhttp = new XMLHttpRequest();
/*
The onreadystatechange Property
The readyState property holds the status of the XMLHttpRequest.

The onreadystatechange property defines a function to be executed when the readyState changes.

The status property and the statusText property holds the status of the XMLHttpRequest object.

Property	Description
onreadystatechange	Defines a function to be called when the readyState property changes
readyState	Holds the status of the XMLHttpRequest. 
0: request not initialized 
1: server connection established
2: request received 
3: processing request 
4: request finished and response is ready
status	200: "OK"
403: "Forbidden"
404: "Page not found"
For a complete list go to the Http Messages Reference
statusText	Returns the status-text (e.g. "OK" or "Not Found")
The onreadystatechange function is called every time the readyState changes.

When readyState is 4 and status is 200, the response is ready:
Example:
*/
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send(); 
}
/*
JS JSON
JSON: JavaScript Object Notation.
JSON is a syntax for storing and exchanging data.
JSON is text, written with JavaScript object notation.
JSON is a lightweight data-interchange format
JSON is "self-describing" and easy to understand
JSON is language independent *
JSON uses JavaScript syntax, but the JSON format is text only.
Text can be read and used as a data format by any programming language.

Why use JSON?
Since the JSON format is text only, it can easily be sent to and from a server, and used as a data format by any programming language.
JavaScript has a built in function to convert a string, written in JSON format, into native JavaScript objects:
JSON.parse()
So, if you receive data from a server, in JSON format, you can use it like any other JavaScript object.

Exchanging Data
When exchanging data between a browser and a server, the data can only be text.
JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.
We can also convert any JSON received from the server into JavaScript objects.
This way we can work with the data as JavaScript objects, with no complicated parsing and translations.

Sending Data
If you have data stored in a JavaScript object, you can convert the object into JSON, and send it to a server:
*/
// Example:
var myObj = {name: "John", age: 31, city: "New York"};
var myJSON = JSON.stringify(myObj);
window.location = "demo_json.php?x=" + myJSON;
/*
Receiving Data
If you receive data in JSON format, you can convert it into a JavaScript object:

Example*/
var myJSON = '{"name":"John", "age":31, "city":"New York"}';
var myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj.name;
/*
Storing Data
When storing data, the data has to be a certain format, and regardless of where you choose to store it, text is always one of the legal formats.

JSON makes it possible to store JavaScript objects as text.
*/
// Storing data:
myObj = {name: "John", age: 31, city: "New York"};
myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;

