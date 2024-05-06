

// Get references to the clock hands
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

// Function to update clock hands
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
   
    // Calculate degrees for each hand
    const hourDegrees = (hours % 12) * 30 + minutes * 0.5;
    const minuteDegrees = minutes * 6 + seconds * 0.1;
    const secondDegrees = seconds * 6;

    // Apply rotation to clock hands
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

// Update clock every second
setInterval(updateClock, 1000);

// Run updateClock function immediately to prevent initial delay
updateClock();
