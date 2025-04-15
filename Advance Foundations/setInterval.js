/*
    Challenge:
    1. Every 1000 milliseconds, log out:
        `Your device will shut down in ${secondsRemaining} seconds`.
        Decrement 'secondsRemaining'.
    2. When 'secondsRemaining' hits zero, you should log out
        `Your device is shutting down`.
        At this point, the setInterval should be cleared. What method
        can you use to do that? (We used clearTimeout to cancel setTimeout.)
    */

function startCoutdown(device) {
  let secondsRemaining = 3;

  const shutdownInterval = setInterval(function () {
    if (secondsRemaining > 0) {
      console.log(`Your ${device} is Shutting down in ${secondsRemaining}!`);
      secondsRemaining--;
    } else {
      console.log(`Your ${device} has been Shut Down!`);
      clearInterval(shutdownInterval);
    }
  }, 1000);
}

startCoutdown("Macbook");
