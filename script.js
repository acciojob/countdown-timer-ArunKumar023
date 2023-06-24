// Your script here.

// Get the required elements from the DOM
const userInput = document.getElementById('userInput');
const startButton = document.querySelector('button');
const countDownElement = document.getElementById('countDown');
const endTimeElement = document.getElementById('endTime');

let countdown; // Variable to store the countdown interval

function startCountdown() {
  const seconds = parseInt(userInput.value); // Get the countdown time from the input field

  // Check if the input is a valid number
  if (Number.isNaN(seconds)) {
    alert('Please enter a valid number!');
    return;
  }

  // Calculate the end time
  const currentTime = Date.now();
  const endTime = currentTime + seconds * 1000;

  // Update the UI with the end time
  endTimeElement.textContent = new Date(endTime).toLocaleTimeString();

  // Clear any existing countdown interval
  clearInterval(countdown);

  // Start the countdown interval
  countdown = setInterval(() => {
    const secondsLeft = Math.round((endTime - Date.now()) / 1000);

    // Check if the countdown is finished
    if (secondsLeft < 0) {
      clearInterval(countdown);
      countDownElement.textContent = 'Countdown Finished!';
      return;
    }

    // Update the UI with the remaining time
    countDownElement.textContent = secondsLeft;
  }, 1000);
}

// Add click event listener to the start button
startButton.addEventListener('click', startCountdown);