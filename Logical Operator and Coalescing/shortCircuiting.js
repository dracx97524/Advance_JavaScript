const jobHunter = {
    name: 'Tom Chant',
    jobSearchArea: 'Europe',
}

/***** if else *****/
// if (jobHunter.jobSearchArea) {
//     console.log(`${jobHunter.name}'s work location is ${jobHunter.jobSearchArea}`)
// }
// else {
//     console.log(`${jobHunter.name}'s work location is Worldwide`)
// }

const workLocation = jobHunter.jobSearchArea || 'Worldwide';
console.log(`${jobHunter.name}'s work location is ${workLocation}`)



/***** ternary *****/
// const workLocation = jobHunter.jobSearchArea ? jobHunter.jobSearchArea : 'Worldwide' 
// console.log(`${jobHunter.name}'s work location is ${workLocation}`)




