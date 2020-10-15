function Animal_Function()   {
    var Animal_Output;
    var Animal = document.getElementById("Animal_Input").value;
    var Animal_String = "s are great animals!";
    switch(Animal)  {
        case "Dog":
        Animal_Output = "Dog" + Animal_String;
        break;
        case "Cat":
        Animal_Output = "Cat" + Animal_String;
        break;
        case "Pig":
        Animal_Output = "Pig" + Animal_String;
        break;
        case "Fish":
        Animal_Output = "Fish" + Animal_String;
        break;
        case "Duck":
        Animal_Output = "Duck" + Animal_String;
        break;
        case "Lizard":
        Animal_Output = "Lizard" + Animal_String;
        break;
        default:
            Animal_Output = "Please enter an Animal exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Animal_Output;
}


function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

function Change_Function() {
    var A = document.getElementsByClassName("Change");
    A[1].innerHTML = "This is the new sentence!";
}

var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");

//Create gradient
var grd = ctx.createRadialGradient(150,50,5,170,60,450);
grd.addColorStop(0,"purple");
grd.addColorStop(1, "white");

//fill with gradient
ctx.fillStyle =grd;
ctx.fillRect(10,10,500,250);