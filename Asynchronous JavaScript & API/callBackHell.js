function uploadFile() {
    return new Promise((resolve, reject) => {
        console.log('Step 1: Uploading file...')
        setTimeout(() => {
            resolve() // Call the next step after 1 second
        }, 1000)
    })
}

function processFile() {
    return new Promise((resolve, reject) => {
        console.log('Step 2: Processing file...')
        setTimeout(() => {
            resolve() // Call the next step after 1 second
        }, 1000)
    })
}

function notifyUser() {
    return new Promise((resolve, reject) => {
        console.log('Step 3: Notifying user...')
        setTimeout(() => {
            resolve() // Call the next step after 1 second
        }, 1000)
    })
}

/* 
Challenge:
1. Await these promises in order in a try/catch block and 
   when they are done, log 'All steps completed!'.
*/
try{
 await uploadFile();
 await processFile();
 await notifyUser();
console.log('All Steps are Completed !!!');

}
catch(err){
    console.log("An Error Occured!!!")
}
// expected output:

// Step 1: Uploading file...
// Step 2: Processing file...
// Step 3: Notifying user...
// All steps completed!


// uploadFile(() =>
//     processFile(() =>
//         notifyUser(                                                  // Call Back Hell Pyramid of Doom
//             () => console.log('All steps completed!')
//         )
//     )
// )





