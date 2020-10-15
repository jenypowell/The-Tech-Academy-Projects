

function displayType(animal) {
    var animalType = animal.getAttribute("data-animal-type");
    alert(animalType + "s live in " + animal.innerHTML + " habitats!");
}