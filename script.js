let button = document.querySelector("button");


button.addEventListener("click", function() {
    let waterTemp = document.querySelector("input").value;
    if (waterTemp >= 212) {
   document.querySelector("p").innerHTML="Boiling!";
    }
    else if (waterTemp >= 32) {
        document.querySelector("p").innerHTML="Ok to drink!";
    }
    else if (waterTemp <= 32) {
        document.querySelector("p").innerHTML="Frozen!";
    }
   else if (waterTemp === 155) {
        document.querySelector("p").innerHTML="Optimal temperature for consuming hot drinks!";
    }
    
    else {
        document.querySelector("p").innerHTML="Invalid temperature!";
    }
    
    
});

// Bonus: According to research, 155°F is an optimal temperature for consuming hot drinks. 
//  - How would you improve the conditional statements above so that your code gives some more helpful information to the user?