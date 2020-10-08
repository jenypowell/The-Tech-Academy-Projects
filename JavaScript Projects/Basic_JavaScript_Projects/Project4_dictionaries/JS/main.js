function My_Dictionary() {
    var Animal={
        Species: "Dog",
        Color:"Black",
        Breed: "Labrador",
        Age: 5,
        Sound:"Bark"
    }; //create a dictionary 
document.getElementById("Dictionary").innerHTML = Animal.Sound; //return animal sound in html file
}

function Car_Dictionary() {
    var Car={
        Make: "Volvo",
        Model: 240,
        Color:"Red",
        Year: 1982,
}; //create dictionary
    delete Car.Color //delete color key
document.getElementById("Car").innerHTML = Car.Color; //return color key in html file
}

