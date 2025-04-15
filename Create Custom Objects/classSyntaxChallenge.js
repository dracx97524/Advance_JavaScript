/*
Challenge:
Rebuild this constructor function as a class.
*/
class Character{
    constructor(name){
        this.name = name;
        this.collectedItemsArr = [];
    }
    addItems(...item){
        this.collectedItemsArr.push(item);
        console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)

    }

}


const dracx = new Character('Dracx');
const sarah = new Character('Sarah');
const rusher = new Character('Rusher')

sarah.addItems('Blood Magic', 'Healing Item Elixir')
dracx.addItems('Dark Magic','Black Demon Sword')
rusher.addItems('Wind Magic','LightBringer','Spirit Wand')



