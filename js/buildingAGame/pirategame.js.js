/* Where we start. What are we making? What do we define these items as?
Start with commented out items and then work on what you want the objects to do.
Then start writing code and testing it in the console to make sure it works.

Sailor = {object}
    Name = "string"
    Sword = "string"
    Hat = boolean
    Parrot = boolean

Ship
    Name = "string"
    Flag = "string"
    Size = object
        Cannons = integer
        

var sailors = [
/*
Name = "string"
Weapon = "string"
Hat = boolean
Parrot = boolean]
*/ 
/*Object Literal Syntax- Don't do the following its just too long!
{
    Name: "Jack",
    Weapon: "pistol",
    Hat: false,
    Parrot: true
},
{
    Name: "Jill",
    Weapon: "sabre",
    Hat: true,
    Parrot: false
},
{
    Name: "Bart",
    Weapon: "blunderbuss",
    Hat: false,
    Parrot: false
},
{
    Name: "Lara",
    Weapon: "machete",
    Hat: true,
    Parrot: true
}

];
Let's make it easier to work with. 
Lets make arrays instead of literal ojects.*/



/*Random Generator Function
    -Pass an item and return a random item.
    -Undefined parameter returns random true or false.
    -Param array returns 1 random item from array.
    -Param integer returns a random number with integer as upper limit.
*/

function randomGenerator(item){
    if (!item){
        var ranBool = Math.round(Math.random());

        if (ranBool === 1){
            return true;
        }
        else {
            return false;
        }

    }
     if (typeof item === "number"){
        return Math.floor(Math.random() * item);
     }

    return item[Math.floor(Math.random() * item.length)];
}

// Build Sailor Function
// no parameters neccessary yet
// Returns a sailor object

function buildSailor(){
    var weapons = ["blunderbuss", 
                   "sabre", 
                   "machete",
                   "pistol",
                   "umbrella"];

    var names = ["Jack Blackmane", 
                 "Bart The Bloody",
                 "Kate The Snake",
                 "Mary The Shadow",
                 "Kraken Dave",
                 "One Eyed Bill", 
                 "Bob The Peg Leg Roberts"];
    return {
        Name: randomGenerator(names),
        Weapon: randomGenerator(weapons),
        Hat: randomGenerator(),
        Parrot: randomGenerator()
    }
}

// Build Ship Function
// Takes no params
// Returns Array of ships
function buildShips()
{
    var shipNames =[
        "Lucitania", 
        "Queen Anne", 
        "Black Pearl",
        "Magdellena",
        "Mary Celeste",
        "Edmond Fitzgerald",
        "The Consitution"];
    var flags = [
        "French", 
        "British",
        "Jolly Rodger",
        "US"];
    var cannons = [1, 5, 10, 20, 30, 50];  

    cannons = randomGenerator(cannons);

    crewNum = randomGenerator(cannons);

    return {
        Name: randomGenerator(shipNames),
        Flag: randomGenerator(flags),
        Size:{
            Cannons: cannons,
            crew: crewNum
        },
        Strength: cannons + crewNum
    }    
}

// Display Sailors on DOM a list
// needs a param array of objects
function displayList (listofObjs){
    // create an ul element
    // create a li element
    //   -append a particular object(ex. sailor)
    //      -set as innerHTML
    // append li to ul
    // append our ul to pirate class element
var unOrdered = document.createElement('ul');
var objectContent = " ";

for(var i = 0; i < listofObjs.length; i++){
// loop through objects to add list item content
    for (key in listofObjs[i]){
        var listItems = document.createElement('li');

        objectContent += ("<br>" + key + ": " + listofObjs[i][key]);
        listItems.innerHTML = objectContent;
    }

    unOrdered.appendChild(listItems);
}

document.body.appendChild(unOrdered);

};

window.onload = function (){
    var arrayOSailors = [];
    
    for(var i = 0; i < 20; i++){
            arrayOSailors.push(buildSailor());
    }

    displayList(arrayOSailors);
}
// Now we want them TO FIGHT!
// Pirates vs Other Ships
// 1. Always need a Jolly Rodger flag 
// so how do we get it to fight a "pirate" vs other flags
// 

function battleShips(){
    var ship1 = buildShips();
    var ship2 = buildShips();
    ship1.flags = "Jolly Rodger";
    
    

    if (ship1.Strength < ship2.Strength){
        console.log(ship1.Flag + "won");
    }
    else if(ship2.Strength < ship1.Strength){
        console.log(ship1.Flag + "won");
    }
    else if (ship1.Strength === ship2.Strength){
        console.log("Draw Matey");
    }
    
}

window.onload = functions() {
    for (var i = 0; i < 50; i++){
        battleShips();
    }
}



 

for(var i = 0; i < 20; i++){
    console.log(buildShips());

}
        
for(var i = 0; i < 20; i++){
    console.log(randomGenerator());

}

for(var i = 0; i < 20; i++){
    console.log(buildSailor());

}


