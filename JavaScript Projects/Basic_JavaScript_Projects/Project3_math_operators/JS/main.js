function addition_function() {
    var addition= 7+2;
    document.getElementById("math").innerHTML = "7+2= "+addition; //display addition
};

function subtraction_function() {
    var subtraction = 10-6;
    document.getElementById("math_2").innerHTML = "10-6= " + subtraction //display subtraction
}

function multiply() {
    var simple_math = 12*9;
    document.getElementById("math_3").innerHTML="12 x 9= " + simple_math //display multiplication
}

function division() {
    var simple_math_2 =78/9;
    document.getElementById("math_4").innerHTML="78/9= " + simple_math_2 //display division
}

function lots_of_math() {
    var simple_math_3= (2+3)*10/4-6;
    document.getElementById("math_5").innerHTML="2 plus 3, multiplied by 10, divided into quarters and then subtract 6 equals " + simple_math_3; //show multiple math operations in one line
}

function modulus_operator()    {
    var simple_math_4 = 35 % 8;
    document.getElementById("math_6").innerHTML = "When you divide 35 by 8 you have a remainder of: " + simple_math_4; //display remainder
}

function negation_operator()    {
    var x = 25;
    document.getElementById("math_7").innerHTML = -x; //display negative number
}

var T= 10;
    T++;
    document.write(T); //use increment

var B = 20; 
    B--;
    document.write(" "+B); //use decrement


    window.alert(Math.random()); //add window allert for random number between 0-1


    window.alert(Math.random() *150); //add window alert for random number between 0-150

    document.write(" "+Math.round(2.3)); //display rounded number



