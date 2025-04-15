// .apply() and .call()


function displayPolitician(currentSituation) {
    // console.log(this)
    console.log(`${this.name} is ${this.age} years old. Current situation: ${currentSituation}.`) 
}



const politician1 = {
    name: 'Carly Fowler',
    age: 40
  }

displayPolitician.call(politician1,'in jail for corruption') // .call() takes only arguement
displayPolitician.apply(politician1,['Resigned due to his incompetence']) // .apply() takes array of arguements