/**
 * Price List
 * Coffee $2
 * Sandwiches $5
 * Salad $4
 * Lemon Cake $3
*/

function selectItem(Item){
    let price = 0;
    

    switch(Item){
        case 'Coffee':
            price = 2;
            break;

        case  'Sandwiches':
            price = 5;
            break;

        case 'Salad':
            price = 4;
            break;

        case 'LemonCake':
            price = 3;
            break;

        default:
            console.log("Wrong Choice!");
    }
    return `You selected ${Item}. That will be $${price}`;
}

let price  = selectItem("Coffee");
console.log(price);