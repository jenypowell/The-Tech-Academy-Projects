
document.write(Bigger = (10 > 3) ? "Left number is bigger" : "Right number is bigger");
document.write("<br> <br>"); //determine which is bigger

document.write(Bigger = (10 < 3) ? "Left number is bigger" : "Right number is bigger"); //determine which is bigger
document.write("<br> <br>");

function ride_function()    {
    var Height, Can_ride; //create variables
    Height= document.getElementById("Height").value; //pull user input of height
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //determiine whether rider is tall enough
    document.getElementById("Ride").innerHTML = Can_ride +" to ride.";  //display whether rider is tall enough
}
function vote_function()    {
    var Height, Can_ride; //create variables
    Age= document.getElementById("Age").value; //pull user input of age
    Can_vote = (Age < 18) ? "You are not old enough to vote yet!":"PLEASE VOTE this year!"; //determiine whether someone is old enough to vote
    document.getElementById("Vote").innerHTML = Can_vote;  //display whether person is old enough to vote
}

function Vehicle(Make, Model, Year, Color)  {   //create object constructor
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;

}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");  //create new objects of a class
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //create new objects of a class
var Erik = new Vehicle("Ford", "Pinto",1971, "Mustard");    //create new objects of a class
function keyword_function() {
    document.getElementById("Keywords_and_Contructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color+"-colored "+Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}   //function to display object details


function Animal(Species, Number_of_legs, Color, Sound)  {    //create object constructor
    this.Animal_Species = Species;
    this.Animal_Legs = Number_of_legs;
    this.Animal_Color = Color;
    this.Animal_Sound = Sound;
}

var Francis = new Animal("Kuhn Kuhn", 4, "black", "squeal")  //create new objects of a class
var Mister = new Animal("Dachshund", 4, "black", "bark")     //create new objects of a class
var Doctor_Turbot = new Animal("Cat", 4, "calico", "meow")   //create new objects of a class

function Animal_Function()  {
    document.getElementById("New_and_This").innerHTML = 
    "Francis is a "+Francis.Animal_Species+" with a "+Francis.Animal_Color +
    " coat. He has " +Francis.Animal_Legs+ " legs and "+ Francis.Animal_Sound 
    +"s to talk with us.";
}         //function to display object details

function Children(Name, Age, Hair, Eyes)  {    //create object constructor
    this.Children_Name = Name;
    this.Children_Age = Age;
    this.Children_Hair = Hair;
    this.Children_Eyes = Eyes;
}

var Floyd = new Children("Floyd", 6, "blonde", "blue")  //create new objects of a class
var Bodhi = new Children("Bodhi", 4, "blonde", "blue")     //create new objects of a class
var Delilah = new Children("Delilah", 3, "blonde", "blue")
var Carter = new Children("Carter", 1, "blonde", "blue")   //create new objects of a class

function Children_Function()  {
    document.getElementById("Kids").innerHTML = 
    "Floyd is my oldest child, he is "+ Floyd.Children_Age+" years old. Bodhi is my next oldest child, he is "
    +Bodhi.Children_Age+" years old. Delilah is my third child and my only girl. She is "+
    Delilah.Children_Age+" years old. Carter is my youngest at "+Carter.Children_Age+" year old."
    +" All of my kids have "+Floyd.Children_Hair+" hair and "+Floyd.Children_Eyes+" eyes."
}         //function to display object details


function count_function()   {
    document.getElementById("Counting").innerHTML = count();
    function count()    {
        var Starting_Point= 9;
        function Plus_one() {Starting_Point += 1;}
        Plus_one();
        return Starting_Point;
        }
}       //create nested function that increases by 1

function nested_function()   {
    document.getElementById("nested").innerHTML = nest();
    function nest()    {
        var Starting_Point=459;
        function Less_one() {Starting_Point -= 176;}
        Less_one();
        return Starting_Point;
        }
}       //create nested function that decreases by 176

