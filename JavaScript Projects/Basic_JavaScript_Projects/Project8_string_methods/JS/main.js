function Deer_Function(){
    var Deer_1 = "It is ";
    var Deer_2 = "currently deer ";
    var Deer_3 = "hunting season ";
    var Deer_4 = "through October 14th.";
    var Deer_Information = Deer_1.concat(Deer_2, Deer_3, Deer_4);
    document.getElementById("Deer").innerHTML = Deer_Information;
}       //create function to concatenate in order to create a sentence

function slice_method() {
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27,33);
    document.getElementById("slice").innerHTML = section;
}   //create function to utilize slice method to pull out part of the sentence.

function slice_it() {
    var sentence_1 = "I have no previous experience with programming languages.";
    var section_1 = sentence_1.slice(7,19);
    document.getElementById("sliced").innerHTML = section_1;
}    //create function to utilize slice method to pull out part of the sentence.

function upper_case()    {
    var str = "this will turn to uppercase"
    var res = str.toUpperCase();
    document.getElementById("uppercase").innerHTML = res;
}   //create function to utilize toUpperCase method to change characters to uppercase

function search_function()    {
    var str = "Project #8 JavaScript"
    var res = str.search("JavaScript");
    document.getElementById("search").innerHTML = res;
}   //create function to utilize search method to display placement of searched for term

function string_method()    {
    var x = 182;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}   //create function to convert numbers to a string

function string_method_2()    {
    var x = 43593409;
    document.getElementById("Numbers_to_string_2").innerHTML = x.toString();
}   //create function to convert numbers to a string

function precision_method() {
    var X = 12938.3102987376112;
    document.getElementById("precision").innerHTML = X.toPrecision(10);
}       //create function to format number to legnth of 10 characters

function precision_method_2() {
    var X = 577658768989876;
    document.getElementById("precision_2").innerHTML = X.toPrecision(8);
}       //create function to format number to legnth of 8 characters

function toFixed_function() {
    var num = 75.789234235;
    var n = num.toFixed(3);
    document.getElementById("fixed").innerHTML = n;
  }     //create function to display number with fixed decimal places

function valueof_function() {
    var str = "Here we can see the valueOf method";
    var res = str.valueOf();
    document.getElementById("value").innerHTML = res;
}       //create a function to show the value of the string object
