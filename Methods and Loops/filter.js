const ages = [1, 5, 9, 23, 56, 10, 47, 70, 10, 19, 23, 18]

const adults = ages.filter(function (age) {
    return  age>=18;
    
})
const children = ages.filter(function(age){
    return age<18;
})
// console.log(children)



//Filter method with Objects

const series = [
    {
        name: 'The Wire',
        location: 'Baltimore',
        lengthInHours : 60,
        genres: ['action', 'thriller', 'detective', 'suspense']
    },
    {
        name: 'Game of Thromes',
        location: 'Westeros and Essos',
        lengthInHours : 70.25,
        genres: ['fantasy', 'action', 'tragedy']
    },
    {
        name: 'Friends',
        location: 'New York',
        lengthInHours : 85,
        genres: ['comedy', 'romance', 'drama']
    },
    {
        name: 'The Walking Dead',
        location: 'Atlanta',
        lengthInHours : 131,
        genres: ['zombie', 'apocalypse', 'thriller', 'suspense']
    },
    {
        name: 'The Big Bang Theory',
        location: 'Pasadena',
        lengthInHours : 139.66,
        genres: ['comedy', 'nerd', 'romance']
    },
]

const newYorkSeries = series.filter(function(show){
    return show.location === 'New York'
})

const regex = new RegExp('hello','ig')

const thrillerSeries = series.filter(function(show){
    return regex.test('helo')
})
console.log(thrillerSeries);

/*
Challenge:
1. Use the .filter() method to create an array
   of all of the thrillers.
*/
