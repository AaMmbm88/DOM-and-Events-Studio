

 window.addEventListener("load", function() {
    function takeOff(){
        
    if (window.confirm("Confirm that the shuttle is ready for takeoff") === true){
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
        // document.querySelector("#shuttleBackground").style.setProperty("background-color", blue); 
        document.getElementById("spaceShuttleHeight").innerHTML += 10000;
        document.getElementById("shuttleBackground").style.backgroundColor = blue;
        


    }    
}
    function landShuttle(){
        window.alert("The shuttle is landing. Landing gear engaged.")
       document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
       shuttleBackground.style.setProperty("background-color", green);
       document.getElementById("spaceShuttleHeight").innerHTML = 0;

    }

    function abortMission(){
        if (window.confirm("Confirm that you want to abort the mission") === true){
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            shuttleBackground.style.setProperty("background-color", green); 
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
    }
    }

    let takeOffButton = document.getElementById("takeoff");
    takeOffButton.addEventListener("click", takeOff);
    let landButton = document.getElementById("landing");
    landButton.addEventListener("click", landShuttle);
    let abortButton = this.document.getElementById("missionAbort");
    abortButton.addEventListener("click", abortMission);
    let shuttleBackground = document.styleSheets.getElementByID("shuttleBackground");
    
   
});