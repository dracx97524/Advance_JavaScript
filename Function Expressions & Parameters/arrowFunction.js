// const getSpendAlert = function(amount){
//     return `Warning! You just spent $${amount}`
// }


const getSpendAlert = amount => amount > 100 ?`Warning! You just spent $${amount}` : false



console.log(getSpendAlert(0));
