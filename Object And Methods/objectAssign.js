const studentDetails = {
    firstName: 'janaka',
    lastName: 'siriwardena',
    age: {
        ram:5,
        rem:9
    },
    country: 'sri lanka',
    email: 'j.siri@totalinternet.com',
    discordUsername: 'JS1',
    }  
    
const shallowCopy = {}

Object.assign(shallowCopy,studentDetails);

shallowCopy.age.rem = 5
console.log(studentDetails);

console.log(shallowCopy);


/*
Challenge:
    1. Prove that what we have created here is a shallow copy.
*/