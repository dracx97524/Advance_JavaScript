

// Promises --> 
// 1. Pending Promises
// 2. Resolved or Fullfilled Promises
// 3. Rejected Promises

// Example of resolved promises
fetch('https://apis.scrimba.com/bored/api/activity')
.then(response => response.json())
.then(data=> console.log(data))
.finally(()=>{console.log('The Operation is Completed!');
})

// Example of pending promises
const response  = await fetch('https://dog.ceo/api/breeds/image/random')
const data =  response.json();
console.log(response.ok);

console.log(data);

// Example of Rejected Promises
fetch('https://api.scrimba.com/bored/api/activity')
.then(response => response.json())
.then(data=> console.log(data))
.catch((err)=>{                                         // catch method for rejected promises
    console.log('This is a Error!')
    // update the DOM to warn the user
        // access an alternative API
})

// Another Example for Rejected Promises

try{
    const response  = await fetch('https://doge.ceo/api/breeds/image/random')
    const data = await response.json();
    console.log(data);
}
catch(err){
    console.log('This is a Error!')
}