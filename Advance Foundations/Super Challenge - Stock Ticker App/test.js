// // const rand = Math.random() * 4;

// // console.log(rand.toFixed(2));

// const getColonTimeFromDate = (date) =>
//   // Convert the date to a time string using 'toTimeString' and extract the first 8 characters (HH:MM:SS)
//   date.toTimeString().slice(0, 8);

// // Log the result of calling 'getColonTimeFromDate' with the current date
// console.log(getColonTimeFromDate(new Date())); // Output: Current time in HH:MM:SS format
// export default function getStockData() {
//   setInterval(() => {
//     const rand = Math.random() * 4;
//     const date = new Date();

// return {
//   name: "QtechAI",
//   sym: "QTA",
//   price: rand.toFixed(2),
//   time: date.toTimeString().slice(0, 8),
// };
//   }, 1500);
// }
function getInfo(name, age) {
  let info = {
    name: name,
    age: age,
  };
  return info;
}
// let a = getInfo("john", 48);
// console.log(a.name);

function getStockData() {
  let randValue = (Math.random() * 4).toFixed(2);
  randValue = Number(randValue);
  console.log(randValue);
  let obj = {
    name: "QtechAI",
    sym: "QTA",
    price: randValue,
    time: Date.toString().slice(0, 8),
  };
  return obj;
}

let a = getStockData();
console.log(a.time);
