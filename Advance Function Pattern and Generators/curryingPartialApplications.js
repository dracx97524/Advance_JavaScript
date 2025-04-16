const calculateVolume = length => width => height => length * width * height

const lengthWidth = calculateVolume(2)(3)

const total1 = lengthWidth(10)
const total2 = lengthWidth(40)
const total3 = lengthWidth(23)


console.log(total1)
console.log(total2);
console.log(total3);
