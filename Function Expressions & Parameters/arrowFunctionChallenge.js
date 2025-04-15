// function speedWarning(speed){
//     return `You are going at ${speed} mph!`
// }
const speedWarning = (speedLimit,speed) => speed>speedLimit ? `You are going at ${speed} mph! and Your speed limit is ${speedLimit}`:`Your within your speed limit`
console.log(speedWarning(40,40))

/*
Challenge
1. Refactor this function to use an arrow function.
2. Make sure you write the least code possible.
*/