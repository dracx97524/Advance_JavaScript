const books = {
    "b001": { title: "To Kill a Mockingbird", price: 18.99, isAvailable: true },
    "b002": { title: "1984", price: 15.99, isAvailable: false },
    "b003": { title: "The Great Gatsby", price: 12.49, isAvailable: true },
    "b004": { title: "Moby Dick", price: 22.50, isAvailable: false }
  }



// const books_2 = new Object(); //Object Constructor
// books_2.name = 'Dracx'

/*
Challenge:
  1. Use Object.keys to get an array of keys. 
     You can store it in a const 'bookKeys'. 
  2. Iterate over bookKeys twice.
     A) First log each individual key in the array.
     B) Then log only the book titles.
*/

const booksKey_Arr = Object.keys(books);
const booksValue_Arr = Object.values(books);

booksKey_Arr.forEach((keys)=>{
    console.log(keys);
})
booksValue_Arr.forEach((values)=>{
    console.log(values.title);
    
})