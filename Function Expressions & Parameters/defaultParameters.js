import { itemsBoughtArr } from './Inline Arrow Function Refactor Challenge/itemsBoughtArr.js'

const  calculateTotalCost = (itemsBoughtArr, discount = 0) => {
    const total= itemsBoughtArr.reduce((total,currentElem)=>{
        return  total + currentElem.priceUSD
    },0);
    return total - discount
}

console.log(calculateTotalCost(itemsBoughtArr,5))