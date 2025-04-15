// IIFE - Imediately Invoked Function Expression
const itemNo = 8745;
(function getItems(){
    
    if(itemNo > 8000){
        console.log("You Will Get the Item");
    }
    else{
        console.log("You will not get the Item");
    }
})()   // <---- IIFE