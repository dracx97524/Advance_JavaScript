/*
Challenge:
1. Use numeric separators (_) to separate out
   the digits into chunks of 3 so they are easier to read.
*/

const tomsBankBalanceGBP = 9_007_199_254_740_991; // Safest Maximum Number

// const tomsBankBalanceGBP_2 = 9007199254740998n; // BigInt
const tomsBankBalanceGBP_2 = BigInt(9007199254740998n);
console.log(typeof tomsBankBalanceGBP_2);

console.log(typeof tomsBankBalanceGBP);
