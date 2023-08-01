// Write your JavaScript code here!

// const { addDestinationInfo } = require("./scriptHelper");

// const { pickPlanet } = require("./scriptHelper");



// const { formSubmission, validateInput } = require("./scriptHelper");

window.addEventListener("load", function(event) {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();

   listedPlanetsResponse.then(function (result) {
        
       listedPlanets = result;
       console.log(listedPlanets);
       
   }).then(function () {
    
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let randomPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);

   });

   
   const form = document.querySelector("form");
   const list = document.getElementById("faultyItems");
   list.style.visibility = 'hidden';

   form.addEventListener("submit", function(event) {

    event.preventDefault();

    
    const pilot = document.querySelector("input[name=pilotName]");
    const copilot = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoLevel = document.querySelector("input[name=cargoMass]");
    // console.log(pilot.value);
    // console.log(copilot.value);
    // console.log(cargoLevel.value);
    // console.log(typeof fuelLevel.value);
    // console.log(typeof cargoLevel.value);
    formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
    
    } 
        
    

   );
    
   
});

