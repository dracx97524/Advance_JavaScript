const character1 = {
  title: "Ninja",
  emoji: "🥷",
  powers: ["agility", "stealth", "aggression"],
};

for (let property in character1) { // for in iterate all the enumerable keys in the object literal
  console.log(character1);
}

let character = "dragon";

for (const letter of character) {
  console.log(letter);
}
