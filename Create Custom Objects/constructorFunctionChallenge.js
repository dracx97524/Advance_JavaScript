/*
Challenge:
1. Create a constructor function called 'Character'.
2. Give it 'name' and 'collectedItemsArr' properties. 
    - 'name' should hold the character’s name.
	- 'collectedItemsArr' should hold an array of items. 
       Initialise it to an empty array.
3. Create an 'addItems' method which takes in an item as 
   a parameter and adds it to 'collectedItemsArr'.
4. The addItems method should log out a sentence like 
   `Merlin now has: wand, map, potion`.
5. Check it’s working by creating several instances of 
   Character and adding items to their arrays.
*/

function Character(name){
    this.name = name;
    this.collectedItemsArr = [];
    this.addItems = function(...Item){
        this.collectedItemsArr.push(Item);
        console.log(`${this.name} now has ${this.collectedItemsArr.join( ' ,')}`)
    }
}   

const dracx = new Character('Dracx');
const sarah = new Character('Sarah');
const rusher = new Character('Rusher')

sarah.addItems('Blood Magic', 'Healing Item Elixir')
dracx.addItems('Dark Magic','Black Demon Sword')
rusher.addItems('Wind Magic','LightBringer','Spirit Wand')



