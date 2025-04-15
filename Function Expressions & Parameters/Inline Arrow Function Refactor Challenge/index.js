import { itemsBoughtArr } from './itemsBoughtArr.js'

const  calculateTotalCost = (itemsBoughtArr) => {
    const total= itemsBoughtArr.reduce((total,currentElem)=>{
         total + currentElem.priceUSD
    },0);
    return total
}

console.log(calculateTotalCost(itemsBoughtArr))