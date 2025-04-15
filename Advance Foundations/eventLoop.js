const start = performance.now();

setTimeout(() => {
  const end = performance.now();
  console.log(`Execution time: ${end - start} milliseconds`);
}, 1000);

// for (let i = 4; i < 100; i++) {
//   console.log(i);
// }
