function count_to_ten() {
    var Digit = "";
    var X = 1;
    while (X<11)    {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_ten").innerHTML = Digit; //count up to ten
}

function count_down_ten() {
    var Digit = "";
    var Y = 10;
    while (Y>0)    {
        Digit += "<br>" + Y;
        Y--;
    }
    document.getElementById("Counting_down_ten").innerHTML = Digit; //count down from ten
}

function hunger()   {
    var str = "I'm starving!";
    var n = str.length;
    document.getElementById("hungry").innerHTML = n;
}   //display the number of characters in the string "I'm starving!"

var Instruments = ["Guitar", "Drums", "Piano", "Violin", "Trumpet","Flute"];
var Content = "";
function for_Loop() {
    for (Y=0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}   //for loop to dispaly list of instruments

function cat_pics()    {
    var Cat_Picture= [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "eating";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is "+
        Cat_Picture[2] +".";
} //create array and display index 2

function array_function()    {
    var Flooring= [];
    Flooring[0] = "wood";
    Flooring[1] = "laminate";
    Flooring[2] = "vinyl";
    Flooring[3] = "carpet";
    document.getElementById("Array").innerHTML = "In this picture, the flooring is "+
        Flooring[1] +".";
} //create array and display index 1

function constant_function()   {
    const Musical_Instrument = {type: "guitar", brand: "Fender", color: "black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900"
    document.getElementById("Constant").innerHTML = "The cost of the "+
    Musical_Instrument.type + " was " + Musical_Instrument.price;
} //create a function using const keyword 


var X=10;
X=7;
document.write(X +"<br>");  //reassign identifier

function constant_function_2()   {
    const Truck = {Make: "Dodge", Model: "Ram", color: "blue", Tires: "20\""};
    Truck.color = "gray";
    Truck.price = "$10,000"
    document.getElementById("Constant_2").innerHTML = "The cost of the "+
    Truck.Make + " was " + Truck.price + ". The "+Truck.Model +" has "+Truck.Tires +" tires.";
} //create a function using const keyword 


  var P = 54;
document.write(P);
{
    let P = 89;
    document.write("<br>"+P);   //display let keyword 
}
document.write("<br>" + P);     //test that let keyword cannot be accessed outsid of the block

function test_2(a)   {
    return 10+5;
}
document.getElementById("test").innerHTML = test_2(); //return 105 in document

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " +this.year + this.color + this.make +this.model;
    }       //create object with properties and method
 
};
document.getElementById("Car_Object").innerHTML= car.description(); //display object properites in document


let dog = {
    breed: "Dachshund ",
    color: "black and tan ",
    name: "Mister Man ",
    weight: "9lbs ",
    sound: "bark",
    description: function() {
        return "Our first dog is a "+this.weight + this.color + this.breed +"named "+this.name
        +" who has a larger than life "+this.sound +"!";
    }   //create object with properties and method

};
document.getElementById("dog").innerHTML = dog.description();   //display object properties and method


var text = ""
var i;
for(i=0; i <20; i++) {  //when i is between 0 - 20, add 1
    if (i===9) { break;}    //stop when i = 9
    text += "The number is "+i +"<br>";
}
document.getElementById("break").innerHTML = text; 


var text = ""
var i;
for(i=0; i <20; i++) {  //when i is between 0 - 20, add 1
    if (i===9) { continue;}    //skip when i = 9, continue to 20
    text += "The number is "+i +"<br>";
}
document.getElementById("continue").innerHTML = text; 
















