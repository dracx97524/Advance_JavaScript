const dailyStepsArr = [10000, 12000, 8000, 15000, 11000, 19000, 13000]

// .every() returns true if every item passes the test.
const areAllOver10k = dailyStepsArr.every(function(stepCount) {
    return stepCount >= 10000
})

// console.log(areAllOver10k)

const areSomeOVer10k = dailyStepsArr.some(function(stepCount) {
    return stepCount >= 10000
})

// console.log(areSomeOVer10k)


const invoicesUSDArr = [201, 354, 26, 1299, 1400, 60, 76]

// .find() returns the value of the first item that passes the test.
const invoiceOver1k = invoicesUSDArr.find(function(invoice) {
    return invoice > 1000
})


const invoiceIndexOver1k = invoicesUSDArr.findIndex(function(invoice) {
    return invoice > 1000
})

console.log(invoiceIndexOver1k)