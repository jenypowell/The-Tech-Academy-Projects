document.write("Good morning!"); 
document.write("<br><br>");//Add line breaks for appearance


var X = "I hope you're having a great day!"
document.write(X);


var B = "text line 1 " + "text line 2 " +" 1-800-123445"; //Assign a concatenated string 
                                                                //value to variable

document.write(X+B);

document.write("<br><br>");//Add line breaks for appearance


document.write("<br><br>"); //Add line breaks for appearance



function My_First_Function() {      //Defining a function and naming it
    var str="This text is purple!";  //Defining a variable and giving it a 
                                    //string value
    var result= str.fontcolor("purple"); //Using the fontcolor method on 
                                        //string variable
    document.getElementById ("Purple_Text") .innerHTML = result; //Putting the value 
                                        //of result into HTML element with "Purple_Text" id.
}

function myFunction ()  {
    var sentence = "Tonight the kids and their dad raced bmx bikes";
    sentence += "They all did great."
    document.getElementById("Concatenate").innerHTML = sentence;
}