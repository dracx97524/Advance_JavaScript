/* 
Challenge: 
    1. Write a function that simulates a simple bank account. 
       The function should store the balance and enable users  
       to deposit money, withdraw money, and check the balance.

Requirements:

- The account balance should start at zero.

- The function should return an object containing 
  3 functions. One for depositing money, one for 
  withdrawing money, and a getBalance function which 
  logs the balance and the account holder's name.

- Deposits should add to the balance, and withdrawals should subtract 
  from it. 
*/

function createBankAccount() {
    let accountBalance = 0;
    return {  checkBalance :function(){
        console.log(`Your Account Balance is $${accountBalance}`);
        
    },
     deposit:function(money){
         accountBalance  += money;
    },
     withdraw:function(money){
        accountBalance-=  money;
    }
 }
}
    
    const daveAccount = createBankAccount()
    const wendyAccount = createBankAccount()
    daveAccount.deposit(50000)
    wendyAccount.deposit(150000)
    daveAccount.deposit(545)
    daveAccount.deposit(87452)
    wendyAccount.deposit(21125)
    daveAccount.withdraw(54215)
    wendyAccount.withdraw(55000)
    daveAccount.checkBalance()
    wendyAccount.checkBalance()

    // Test your code by calling the functions.