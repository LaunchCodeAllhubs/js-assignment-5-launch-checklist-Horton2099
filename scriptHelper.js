// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById("missionTarget");

    missionTarget.innerHTML = `
    <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src= "${imageUrl}">
    `
}

function validateInput(testInput) {
   if(testInput === '') {
    return "Empty";
   } else if (isNaN(testInput)) {
    return "Not a Number";
   } else {
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    let fuelNum = parseInt(fuelLevel);
    let cargoNum = parseInt(cargoLevel);
    // console.log(fuelNum);
    // console.log(typeof fuelLevel);
    // console.log(validateInput(fuelLevel));
    // console.log(validateInput(cargoLevel));
    if( validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
             
    alert("All fields required.");
    
    
   }else if(validateInput(fuelNum) === "Not a Number" || validateInput(cargoNum) === "Not a Number") {
    alert("Number required for Cargo Mass and Fuel Level");
    
   }else if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
    alert("Text required for pilot and co-pilot names.");
    
   }else if(fuelNum < 10000) {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        list.style.visibility = 'visible';
        fuelStatus.innerHTML = `Fuel level too low for launch`
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
        launchStatus.style.color = '#C7254E'
        
    }else if(cargoNum > 10000) {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        list.style.visibility = 'visible';
        fuelStatus.innerHTML = `Fuel level high enough for launch`
        cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
        launchStatus.style.color = '#C7254E';
    }else {
        launchStatus.innerHTML = `Shuttle is Ready for Launch`;
        launchStatus.style.color = '#419F6A';
        list.style.visibility = 'visible';
        fuelStatus.innerHTML = `Fuel level high enough for launch`;
        cargoStatus.innerHTML = `Cargo mass low enough for launch`;
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

   }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        
        return response.json();

        });
    
    return planetsReturned;
}


function pickPlanet(planets) {
    const randomIndex = Math.floor(Math.random() * planets.length);
    const randomPlanet = planets[randomIndex];
    return randomPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
