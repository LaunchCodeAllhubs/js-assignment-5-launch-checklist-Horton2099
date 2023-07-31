// Write your helper functions here!
('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // const missionTarget = document.getElementById("missionTarget");

    // missionTarget.innerHTML = `
    // <h2>Mission Destination</h2>
    //             <ol>
    //                 <li>Name: ${name}</li>
    //                 <li>Diameter: ${diameter}</li>
    //                 <li>Star: ${star}</li>
    //                 <li>Distance from Earth: ${distance}</li>
    //                 <li>Number of Moons: ${moons}</li>
    //             </ol>
    //             <img src= "${imageUrl}">
    // `
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if(testInput === '') {
    return "Empty";
   } else if (isNaN(testInput)) {
    return "Not a Number";
   } else (!isNaN(testInput)); {
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
    console.log(pilot);
    console.log(validateInput(pilot));
    console.log(validateInput(copilot));
    if( validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
             
    alert("All fields required.");
    
    
   }else if(validateInput(fuelNum) === "Not a Number" || validateInput(cargoNum) === "Not a Number") {
    alert("Number required for Cargo Mass and Fuel Level");
    
   }else if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
    alert("Text required for pilot and co-pilot names.");
    
   }else if(fuelLevel < 10000) {
            faultyItems.style.visibility = 'visible';
            fuelStatus.innerHTML = `${fuelLevel} liters is not enough fuel for the journey. `
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = '#C7254E'
    }else if(cargoLevel > 10000) {
            faultyItems.style.visibility = 'visible';
            cargoStatus.innerHTML = `${cargoLevel}kg is too much mass for the shuttle to take off.`;
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = '#C7254E';
    }else {
        launchStatus.innerHTML = `Shuttle is ready for launch`;
        launchStatus.style.color = '#419F6A';
        pilotStatus.innerHTML = `${pilot} Ready`;
        copilotStatus.innerHTML = `${copilot} Ready`;

   }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json();
        });

    return planetsReturned;
}


function pickPlanet(planets) {
    const randomPlanet = Math.floor(Math.random() * planets.length);
    return randomPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
