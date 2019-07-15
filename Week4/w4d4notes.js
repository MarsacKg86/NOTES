// To use Forms. 
// After the head tag. Inside <body></body>:
<form name="myForm" action="/action_page.php"
onsubmit = "return validateForm()" method="post">
    Name: 
    <input type="text" name="fname"></input>
    <input type="submit" value="Submit"></input>

    </form>

// Automatic HTML Form Example:
// HTML form validation can be performed automatically by the browser:
// If a form field (fname) is empty, the required attribute prevents this form from being submitted
<form action="/action_page.php" method="post">
  <input type="text" name="fname" required/>
  <input type="submit" value="Submit"/>
</form>      

// Javascript Example:
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

/* JavaScript Validation API
Constraint Validation DOM Methods
checkValidity() If an input field contains invalid data,
Display message:*/
<!DOCTYPE html>
<html>
<body>

<p>Enter a number and click OK:</p>

<input id="id1" type="number" min="100" max="300" required>
<button onclick="myFunction()">OK</button>

<p>If the number is less than 100 or greater than 300, an error message will be displayed.</p>

<p id="demo"></p>

<script>
function myFunction() {
  var inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  } else {
    document.getElementById("demo").innerHTML = "Input OK";
  } 
} 
</script>

</body>
</html>
/*Validity Properties
The validity property of an input element contains a number of properties related to the validity of data:

Property	Description
customError-	Set to true, if a custom validity message is set.
patternMismatch-	Set to true, if an element's value does not match its pattern attribute.
rangeOverflow-	Set to true, if an element's value is greater than its max attribute.
rangeUnderflow-	Set to true, if an element's value is less than its min attribute.
stepMismatch-	Set to true, if an element's value is invalid per its step attribute.
tooLong-	Set to true, if an element's value exceeds its maxLength attribute.
typeMismatch-	Set to true, if an element's value is invalid per its type attribute.
valueMissing-	Set to true, if an element (with a required attribute) has no value.
valid-	Set to true, if an element's value is valid.

-Regex: Regular Expressions
check out regexr.com
This is for patterns. Like phone numbers, email address, address and ip address.
-MDN regex
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#Syntax

JavaScript Timing Events
Timing Events
The window object allows execution of code at specified time intervals.

These time intervals are called timing events.

The two key methods to use with JavaScript are:

setTimeout(function, milliseconds)
Executes a function, after waiting a specified number of milliseconds.

setInterval(function, milliseconds)
Same as setTimeout(), but repeats the execution of the function continuously.
The setTimeout() Method
window.setTimeout(function, milliseconds);
The window.setTimeout() method can be written without the window prefix.

The first parameter is a function to be executed.

The second parameter indicates the number of milliseconds before execution.

*/

<button onclick="setTimeout(myFunction, 3000)">Try it</button>

<script>
function myFunction() {
  alert('Hello');
}
</script>

/*How to Stop the Execution?
The clearTimeout() method stops the execution of the function specified in setTimeout().

window.clearTimeout(timeoutVariable)
The window.clearTimeout() method can be written without the window prefix.

The clearTimeout() method uses the variable returned from setTimeout():

myVar = setTimeout(function, milliseconds);
clearTimeout(myVar);
If the function has not already been executed, you can stop the execution by calling the clearTimeout() method:
*/
Same example as above, but with an added "Stop" button:

<button onclick="myVar = setTimeout(myFunction, 3000)">Try it</button>

<button onclick="clearTimeout(myVar)">Stop it</button>
/*
The setInterval() Method
The setInterval() method repeats a given function at every given time-interval.

window.setInterval(function, milliseconds);
The window.setInterval() method can be written without the window prefix.

The first parameter is the function to be executed.

The second parameter indicates the length of the time-interval between each execution.

This example executes a function called "myTimer" once every second (like a digital watch).*/
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

/*
How to Stop the Execution?
The clearInterval() method stops the executions of the function specified in the setInterval() method.

window.clearInterval(timerVariable)
The window.clearInterval() method can be written without the window prefix.

The clearInterval() method uses the variable returned from setInterval():

myVar = setInterval(function, milliseconds);
clearInterval(myVar);*/
<p id="demo"></p>

<button onclick="clearInterval(myVar)">Stop time</button>

<script>
var myVar = setInterval(myTimer, 1000);
function myTimer() {
  var d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
</script>










