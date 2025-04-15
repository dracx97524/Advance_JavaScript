// function displayTrafficLight(light) {
//   console.log(light);
// }
// // setTimeout(displayTrafficLight('🟢'),3000);

// setTimeout(displayTrafficLight, 3000, "🟢");

// displayTrafficLight("🔴");

function logAnswer(answer, points) {
  console.log(
    `The answer is ${answer} of course! If you got that right, giver yourself ${points} points.`,
  );
}
const questionTimer = setTimeout(logAnswer, 3000, "Lima!", 10);
console.log("What is the Capital of the Peru?");

document.getElementById("st").addEventListener("click", function () {
  clearTimeout(questionTimer);
  console.log("Cancelling...");
});
