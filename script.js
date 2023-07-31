// Write your JavaScript code here!

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
   })

   
   const form = document.querySelector("form");
   const list = document.getElementById("faultyItems");

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
    
    // if (fuelLevel < 10000) {
    //         faultyItems.style.visibility = 'visible';
    //         fuelStatus.innerHTML = `${fuelLevel} liters is not enough fuel for the journey. `
    //         launchStatus.innerHTML = `Shuttle not ready for launch`;
    //         launchStatus.style.color = '#C7254E'
    //     } else if (cargoLevel > 10000) {
    //         faultyItems.style.visibility = 'visible';
    //         cargoStatus.innerHTML = `${cargoLevel}kg is too much mass for the shuttle to take off.`;
    //         launchStatus.innerHTML = `Shuttle not ready for launch`;
    //         launchStatus.style.color = '#C7254E';
    //     } else {
    //         launchStatus.innerHTML = `Shuttle is ready for launch`;
    //         launchStatus.style.color = '#419F6A';
    //     };
    
    


    } 
        
    

   );
    
   
});

