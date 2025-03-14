const maxMilk = 1000;
const maxCoffee = 1000;
const maxWater = 1000;

const waterComposition = document.querySelector("p#water");
const cofeeComposition = document.querySelector("p#coffee");
const milkComposition = document.querySelector("p#milk");
const cappucinoButton = document.querySelector(".btn#cappucino");
const latteButton = document.querySelector(".btn#latte");
const espressoButton = document.querySelector(".btn#esspresso");
const waterDisplay = document.querySelector(".water#watervolume");
const milkDisplay = document.querySelector(".milk#milkvolume");
const coffeeDisplay = document.querySelector(".coffee#coffeevolume");
const refillButton = document.querySelector(".actions#refill"); // Assuming you have a refill button

// Initial setup to display max values.
waterDisplay.textContent = maxWater;
milkDisplay.textContent = maxMilk;
coffeeDisplay.textContent = maxCoffee;

let currentValueWater = maxWater; // Initialize outside the event listener the value of coffee
let currentValueCoffee = maxCoffee; // Initialize outside the event listener the value of coffee
let currentValueMilk = maxMilk; // Initialize outside the event listener the value of Milk

// Espresso Button

espressoButton.addEventListener("click", () => {
    let countdownIntervalWater;
    let countdownIntervalCoffee;
    let countdownIntervalMilk;

    const waterContent = 50;
    const coffeeContent = 20;
    const milkContent = 10;

    waterComposition.textContent = `Water: ${waterContent}ml`;
    cofeeComposition.textContent = `Coffee: ${coffeeContent}ml`;
    milkComposition.textContent =  `Milk: ${milkContent}ml`;
    

    // Checks if condition for count down is fufilled so as to stop it

    if (countdownIntervalWater) {
        clearInterval(countdownIntervalWater);
    }

    if (countdownIntervalCoffee) {
        clearInterval(countdownIntervalCoffee);
    }

    if (countdownIntervalMilk) {
        clearInterval(countdownIntervalMilk);
    }

    // makes the step value to be the value of the content if the steps is more than the current value
    let stepsWater = waterContent;
    if (stepsWater > currentValueWater) {
        stepsWater = currentValueWater;
    }

    let stepsCoffee = coffeeContent;
    if (stepsCoffee > currentValueCoffee) {
        stepsCoffee = currentValueCoffee;
    }

    let stepsMilk = milkContent;
    if (stepsMilk > currentValueMilk) {
        stepsMilk = currentValueMilk;
    }

    /*countdown current value i na second interval if the steps is 
    greater than zero and stop after the steps are exhausted*/

    countdownIntervalWater = setInterval(() => {
        if (stepsWater > 0) {
            currentValueWater--;
            waterDisplay.textContent = currentValueWater;
            stepsWater--;
        } else {
            clearInterval(countdownIntervalWater);
            countdownIntervalWater = null;
        }
    }, 100);

    countdownIntervalCoffee = setInterval(() => {
        if (stepsCoffee > 0) {
            currentValueCoffee--;
           coffeeDisplay.textContent = currentValueCoffee;
            stepsCoffee--;
        } else {
            clearInterval(countdownIntervalCoffee);
            countdownIntervalCoffee = null;
        }
    }, 100);

    countdownIntervalMilk= setInterval(() => {
        if (stepsMilk > 0) {
            currentValueMilk--;
           milkDisplay.textContent = currentValueMilk;
            stepsMilk--;
        } else {
            clearInterval(countdownIntervalMilk);
            countdownIntervalMilk = null;
        }
    }, 100);


});

// Latte button

latteButton.addEventListener("click", () => {
    let countdownIntervalWater;
    let countdownIntervalCoffee;
    let countdownIntervalMilk;

    const waterContent = 50;
    const coffeeContent = 20;
    const milkContent = 20;

    waterComposition.textContent = `Water: ${waterContent}ml`
    cofeeComposition.textContent = `Coffee: ${coffeeContent}ml`;
    milkComposition.textContent =  `Milk: ${milkContent}ml`;



    // Checks if condition for count down is fufilled so as to stop it

    if (countdownIntervalWater) {
        clearInterval(countdownIntervalWater);
    }

    if (countdownIntervalCoffee) {
        clearInterval(countdownIntervalCoffee);
    }

    if (countdownIntervalMilk) {
        clearInterval(countdownIntervalMilk);
    }

    // makes the step value to be the value of the content if the steps is more than the current value
    let stepsWater = waterContent;
    if (stepsWater > currentValueWater) {
        stepsWater = currentValueWater;
    }

    let stepsCoffee = coffeeContent;
    if (stepsCoffee > currentValueCoffee) {
        stepsCoffee = currentValueCoffee;
    }

    let stepsMilk = milkContent;
    if (stepsMilk > currentValueMilk) {
        stepsMilk = currentValueMilk;
    }

    /*countdown current value i na second interval if the steps is 
    greater than zero and stop after the steps are exhausted*/

    countdownIntervalWater = setInterval(() => {
        if (stepsWater > 0) {
            currentValueWater--;
            waterDisplay.textContent = currentValueWater;
            stepsWater--;
        } else {
            clearInterval(countdownIntervalWater);
            countdownIntervalWater = null;
        }
    }, 100);

    countdownIntervalCoffee = setInterval(() => {
        if (stepsCoffee > 0) {
            currentValueCoffee--;
           coffeeDisplay.textContent = currentValueCoffee;
            stepsCoffee--;
        } else {
            clearInterval(countdownIntervalCoffee);
            countdownIntervalCoffee = null;
        }
    }, 100);

    countdownIntervalMilk= setInterval(() => {
        if (stepsMilk > 0) {
            currentValueMilk--;
           milkDisplay.textContent = currentValueMilk;
            stepsMilk--;
        } else {
            clearInterval(countdownIntervalMilk);
            countdownIntervalMilk = null;
        }
    }, 100);


});

// cappucino button

cappucinoButton.addEventListener("click", () => {
    let countdownIntervalWater;
    let countdownIntervalCoffee;
    let countdownIntervalMilk;

    const waterContent = 50;
    const coffeeContent = 20;
    const milkContent = 0;

    waterComposition.textContent = `Water: ${waterContent}ml`
    cofeeComposition.textContent = `Coffee: ${coffeeContent}ml`;
    milkComposition.textContent =  `Milk: ${milkContent}ml`;




    // Checks if condition for count down is fufilled so as to stop it

    if (countdownIntervalWater) {
        clearInterval(countdownIntervalWater);
    }

    if (countdownIntervalCoffee) {
        clearInterval(countdownIntervalCoffee);
    }

    if (countdownIntervalMilk) {
        clearInterval(countdownIntervalMilk);
    }

    // makes the step value to be the value of the content if the steps is more than the current value
    let stepsWater = waterContent;
    if (stepsWater > currentValueWater) {
        stepsWater = currentValueWater;
    }

    let stepsCoffee = coffeeContent;
    if (stepsCoffee > currentValueCoffee) {
        stepsCoffee = currentValueCoffee;
    }

    let stepsMilk = milkContent;
    if (stepsMilk > currentValueMilk) {
        stepsMilk = currentValueMilk;
    }

    /*countdown current value i na second interval if the steps is 
    greater than zero and stop after the steps are exhausted*/

    countdownIntervalWater = setInterval(() => {
        if (stepsWater > 0) {
            currentValueWater--;
            waterDisplay.textContent = currentValueWater;
            stepsWater--;
        } else {
            clearInterval(countdownIntervalWater);
            countdownIntervalWater = null;
        }
    }, 100);

    countdownIntervalCoffee = setInterval(() => {
        if (stepsCoffee > 0) {
            currentValueCoffee--;
           coffeeDisplay.textContent = currentValueCoffee;
            stepsCoffee--;
        } else {
            clearInterval(countdownIntervalCoffee);
            countdownIntervalCoffee = null;
        }
    }, 100);

    countdownIntervalMilk= setInterval(() => {
        if (stepsMilk > 0) {
            currentValueMilk--;
           milkDisplay.textContent = currentValueMilk;
            stepsMilk--;
        } else {
            clearInterval(countdownIntervalMilk);
            countdownIntervalMilk = null;
        }
    }, 100);


});




refillButton.addEventListener("click", () => {
    currentValueWater = maxWater;
    currentValueCoffee = maxCoffee;
    currentValueMilk = maxMilk;
    waterDisplay.textContent = maxWater;
    milkDisplay.textContent = maxMilk;
    coffeeDisplay.textContent = maxCoffee;
});

