document.write("hello, world!"); 
document.write("<br><br>");//Add line breaks for appearance


var X = "Adding a variable"
window.alert(X);
document.write(X);


document.write("\"I'm adding some extra quotes\" to this file." +"<br>"
+"Plus I will add another line of text." +"<br>"
+ "It was all running together.");


var B = "Add these lines together" + "another line" +"35799"; //Assign a concatenated string 
                                                                //value to variable

document.write(B);

document.write("<br><br>");//Add line breaks for appearance

var Mom="Jeny", Dad="Ryan", Sons="Floyd, Bodhi & Carter", Daughter="Delilah" //Define multiple variables
document.write(Sons); //Call varaible to print
document.write("<br><br>"); //Add line breaks for appearance

var Mom= Mom.fontcolor("purple") //Using the fontcolor method on 
                                    //string variable
var Dad= Dad.fontcolor("Red")  //Using the fontcolor method on 
                                    //string variable
var Sons= Sons.fontcolor("Green")  //Using the fontcolor method on 
                                    //string variable
var Daughter= Daughter.fontcolor("orange")  //Using the fontcolor method on 
                                    //string variable


document.write(Mom, Dad, Sons, Daughter); //Concatenate variables together

document.write("<br><br>"); //Add line breaks for appearance


document.write(3+3); //Write an expression

document.write("<br><br>"); //Add line breaks for appearance

function My_First_Function() {      //Defining a function and naming it
    var str="This text is green!";  //Defining a variable and giving it a 
                                    //string value
    var result= str.fontcolor("green"); //Using the fontcolor method on 
                                        //string variable
    document.getElementById ("Green_Text") .innerHTML = result; //Putting the value 
                                        //of result into HTML element with "Green_Text" id.
}

