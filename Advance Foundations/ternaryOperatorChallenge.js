const correctAnswer = 5;
const playerGuess = 8;

// const message = correctAnswer === playerGuess ? "Right Answer" : "Wrong Answer"; 

const message = playerGuess < correctAnswer ? "Too Low" : playerGuess > correctAnswer ? "Too High" : "Exact Value";
console.log(message);