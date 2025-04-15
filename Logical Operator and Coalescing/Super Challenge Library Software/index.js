/*
Challenge: Refactor the Library System Code.

You are working with a piece of code that handles 
information about books in a library system. The 
current code is functional but can be improved to 
be more concise and efficient by using short-circuiting, 
nullish coalescing, and Optional Chaining.

The existing code performs the following tasks:
- Pushes an object with title, author, year published, 
  and availability to an array 'collection'
- Provides default values for missing information.
*/

const collection = []

function addBookToCollection(title, author, yearPublished, libraryData) {
    // Explicitly check for title

     const title_ =  title ||  'Unknown Title'
    

    // Explicitly check for author
    const author_ = author || 'Unknown Author'

    // Explicitly check if yearPublished is undefined or null
    const year = yearPublished ??  'Not Specified'
    

    // Explicitly check for availability at main library|
    let availability =libraryData?.locations?.mainLibrary && 'Available'  || 'Not Available' // Default value


    // Push the book object to 'collection'
    collection.push({
        title: title_,
        author: author_,
        yearPublished: year,
        availability: availability
    })
}
// Examples of adding a book
addBookToCollection('JavaScript: The Good Parts', 'Douglas Crockford', 2008, { locations: { mainLibrary: true}})
addBookToCollection('', 'William Shakespeare', null, null, )
addBookToCollection('House of Giants', 'Gemma Small', '', null, {locations: { mainLibrary: null}})
console.log(collection) // House of Giants is not yet published!!




