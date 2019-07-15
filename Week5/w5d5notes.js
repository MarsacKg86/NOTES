/* 
Local Storage

-Refer

Reading and Setting Cookies
Cookies let you store user information in web pages.
Cookies are save in name-value pairs.
JavaScript can create, read, and delete cookies with the property.
*/
document.cookie
document.cookie = "username=Katharine";
// You can also add an expiry date (in UTC time).
document.cookie = "username=Katharine; expires=Fri, 26 July 2019 12:00:00 UTC";
// By default the cookie belongs to the current page.

