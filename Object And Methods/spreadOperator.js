const lunchMenu = ['Greek Salad', 'Open Sandwich', 'Parsnip Soup', 'Flatbread and Dip']
const dinnerMenu = ['Lasagne', ['Shezwan Rice','Pasta'], 'Tagine', 'Katsu Curry']
const sweetMenu = ['Mixed Berry Ice Cream', 'Chocolate Brownie', 'Orange Cheesecake']


// Spread Operator (...)

const eventMenu = [...lunchMenu,...dinnerMenu,...sweetMenu] // Shallow Copy of an Array
eventMenu[5][1] = 'Pizza'
console.log(dinnerMenu);
console.log(eventMenu);


