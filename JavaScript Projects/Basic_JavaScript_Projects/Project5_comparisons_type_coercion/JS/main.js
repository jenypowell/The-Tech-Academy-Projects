
document.write(typeof "word"); //return value string
document.write("<br> <br>"); //add space for appearance

document.write(typeof 3); //return value number

function Number_function()   {
    document.getElementById("Test").innerHTML = 0/0; //assign value to function; return value NaN
}

function true_function()    {
document.getElementById("Test_2").innerHTML = isNaN('I\'m getting sleepy!'); //assign value to function; return true value
}

function false_function()    {
    document.getElementById("Test_3").innerHTML = isNaN('3940'); //assign value to funcation; return false value
    }

document.write("<br> <br>"); //add space for appearance
document.write(2E568) //displat infinity

document.write("<br> <br>"); //add space for appearance
document.write(-2E568) //display negative infinity

document.write("<br> <br>"); //add space for appearance
document.write(45<5); //display false value

document.write("<br> <br>"); //add space for appearance
document.write(45<5); //display true value

console.log(10*35); //use cosole log to view math 

document.write("<br> <br>"); //add space for appearance
document.write("12"+6);

console.log(10<"ten"); //display false in the console log using boolean logic

document.write("<br> <br>"); //add space for appearance
document.write(55==25); //use boolean logic to display false

document.write("<br> <br>"); //add space for appearance
document.write(25==25); //use boolean logic to display true
document.write("<br> <br>"); //add space for appearance

R=12;
E=45;
document.write(R===E); //use boolean logic to see if data is equal in value and type
document.write("<br> <br>"); //add space for appearance

Y=12;
F="twelve";
document.write(Y===F); //use boolean logic to see if data is equal in value and type
document.write("<br> <br>"); //add space for appearance

S="Hello";
T="Hello";
document.write(S===T); //use boolean logic to see if data is equal in value and type
document.write("<br> <br>"); //add space for appearance

V=15;
G="Hello";
document.write(V===G); //use boolean logic to see if data is equal in value and type
document.write("<br> <br>"); //add space for appearance

document.write(20 > 40 && 30 > 6); //use boolean logic to see if both values are true
document.write("<br> <br>"); //add space for appearance

document.write(20 < 40 && 30 > 6); //use boolean logic to see if both values are true
document.write("<br> <br>"); //add space for appearance

document.write(20 > 40 || 30 > 6); //use boolean logic to see if either values are true
document.write("<br> <br>"); //add space for appearance

document.write(20 < 40 || 30 > 6); //use boolean logic to see if either values are true
document.write("<br> <br>"); //add space for appearance

document.write(20 > 40 || 30 < 6); //use boolean logic to see if either values are true
document.write("<br> <br>"); //add space for appearance

function Not_function() {
    document.getElementById("Not").innerHTML = !(20>10); //use boolean logic to see if value is false
}
document.write("<br> <br>"); //add space for appearance

function Not_1_function() {
    document.getElementById("Not_1").innerHTML = !(20<10); //use boolean logic to see if value is false
}
document.write("<br> <br>"); //add space for appearance