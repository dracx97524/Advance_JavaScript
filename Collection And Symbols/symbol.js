const usr = Symbol('user name')

const user = {
    name:'Dracx'
}

user[usr] = 'DRacx556'
for (let prop in user){
    console.log(prop)
}

console.log(JSON.stringify(user));
console.log(user[usr])