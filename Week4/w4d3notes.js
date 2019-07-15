//  Day 3 DOM: Document Object Model
/* HTML builds up objects for JavaScript.
Intro to concept of api- Application Programming Interface
First thing we need to do is we need to select the element(tag, class, id).

There on tons of ways to do this but here's 2:
1. document.querySelector(.class);
                         (#id stuff);
                         (tag thing);   
What if we don't just want one? What if we want all the elements.
2. document.querySelecterAll(.class);

Lets query some selectors
*/
// gives you the first:
var pars = document.querySelectorAll('p');
// this would get us all the paragraphs on the HTML.
// gives you an array:
var divs = document.querySelectorAll('div');
// to make all the divs background red:
for(var i = 0; i < divs.length; i++) {
     divs[i].style.background = 'red';
 }
/*
Node Navagation-
Check out this resource. Since we aren't going to use it that much.
w3schools.com/js/js_htmldom_navagation.asp
If you have trouble getting to a child or sibling you can use this site
to help get you where you need to go. DO NOT USE jquery $. If you see the $ 
it means you'd have to download and it will only make things harder at this
point.

DOM Manipulation-
Style, its the attribute. 
innerHTML- is the content between the <tags>.

-Select element
-Manipulate element
-when
-creating

Google what you want it to listen for and insert code event instead
of looking through the huge list of what its capable of doing.
addEventListner:
document.addEventListner('click', function(){

});
var name = document.creatElement('tag')

name = myElement.appendchild(' ')



*/



