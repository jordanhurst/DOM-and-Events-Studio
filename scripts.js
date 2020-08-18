window.addEventListener("load", function(){

    let takeOff = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let shuttleHeightNum = Number(document.getElementById('spaceShuttleHeight').innerHTML);
    let shuttleHeightString = document.getElementById("spaceShuttleHeight");
    let landing = document.getElementById("landing");
    let abort = document.getElementById("missionAbort");
    let buttonsArray = document.querySelectorAll("button");
    let upButton = buttonsArray[0];
    let downButton = buttonsArray[1];
    let leftButton = buttonsArray[2];
    let rightButton = buttonsArray[3];
    let rocket = document.getElementById("rocket");
    let rocketPosition = 0;
    // rocket.style.left = '100px';
    // rocket.style.position = "relative";
    // window.alert(rocket.style.position);
    
    // function increaseHeight(){
    //     let counter = 0;
    //     window.alert('starting function');
    //     while (counter<10000){
    //         let incrementValue = Math.floor(random()*101);
    //         if(counter+incrementValue<10000){
    //             shuttleHeightNum += incrementValue;
    //             shuttleHeightString.innerHTML = shuttleHeightNum;
    //         } else {
    //             incrementValue = 10000 - counter;
    //             shuttleHeightNum += incrementValue;
    //             shuttleHeightString.innerHTML = shuttleHeightNum;
    //         }
    //         counter += incrementValue;
    //         window.alert('test');
    //     }
    //     return;
    // }

    takeOff.addEventListener("click", function(){
        let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if(confirmation){
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeightNum += 10000;
            shuttleHeightString.innerHTML = shuttleHeightNum;
        }
    });

    landing.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeightNum = 0;
        shuttleHeightString.innerHTML = shuttleHeightNum;
        rocketPosition = 0;
        rocket.style.transform = "translateX(" + rocketPosition + "px)";
    });

    abort.addEventListener("click", function(){
        let confirmation = window.confirm("Confirm that you want to abort the mission.");
        if(confirmation){
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeightNum = 0;
            shuttleHeightString.innerHTML = shuttleHeightNum;
            rocketPosition = 0;
            rocket.style.transform = "translateX(" + rocketPosition + "px)";
        }
    });

    upButton.addEventListener("click", function(){
        shuttleHeightNum += 10000;
        shuttleHeightString.innerHTML = shuttleHeightNum;
    });

    downButton.addEventListener("click", function(){
        if(shuttleHeightNum >= 10000){
            shuttleHeightNum -= 10000;
            shuttleHeightString.innerHTML = shuttleHeightNum;
        }
    });

    rightButton.addEventListener("click", function(){
        if(rocketPosition<230){    
            rocketPosition += 10;
            rocket.style.transform = "translateX(" + rocketPosition + "px)";
        }
    })

    leftButton.addEventListener("click", function(){
        if(rocketPosition> -230){    
            rocketPosition -= 10;
            rocket.style.transform = "translateX(" + rocketPosition + "px)";
        }
    })
})