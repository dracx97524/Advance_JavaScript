// class Character {

//     #health = 100
//     static characterCreated = 0

//     constructor(name) {
//         this.name = name;
//         Character.characterCreated++;
//     }
//     takeDamage() {
//         this.#health = this.#health > 0 ? this.#health - 5 : this.#health + 5;
//         console.log(`${this.name} health is decreased by 5 and now his health is ${this.#health}`)

//     }
//     getStatus() {
//         return `The Character Name is ${this.name} Current Health : ${this.#health} Status : ${this.#health > 0 ? 'is Alive' : 'is Dead'}`
//     }
//     get healthStatus() {
//         return `${this.name} has ${this.#health} Health and ${this.#health > 0 ? 'is Alive' : 'is Dead!!'}`;
//     }
//     get isAlive() {
//         if (this.#health > 0) {
//             console.log(`${this.name} is still Alive`);
//         }
//     }
//     set increaseHealth(increase) {
//         if (this.#health < 5) {
//             this.#health += increase;
//         }
//     }
//     static getCount() {
//         return Character.characterCreated
//     }
//     /* Base Character Class
//     Your task is to design and implement a Character class with properties 'name' (a string), 'health' (a number), and isAlive (a boolean). This class will serve as a foundation for a simple game or simulation where characters can take damage and possibly "die" if their health reaches zero.
    
//     Class Structure:
//     Your class should have:
//     - a name property that is set through the constructor.
//     - a private health property initialized to 100.
//     - a static property count to track how many characters have been created.
    
//     Static Methods to add:
//     - incrementCount() to increase the count each time a new character is instantiated.
//     - getCount() to return the current number of characters.
    
//     Health Management:
//     - Include a getter and a setter for health. The setter should ensure that the health value does not fall below zero.
    
//     Damage Functionality:
//     - Implement a method 'takeDamage' which decreases the health value by a specified amount. 
    
//     Alive Status:
//     - Implement a getter for 'isAlive' that returns a boolean value. A character is considered alive if their health is greater than zero.
    
//     Status Report:
//     - Implement a method getStatus() that returns a string stating the character's name, 
//       current health, and whether they are alive or dead.
//     */
// }

// class Hero extends Character {

//     constructor(name) {
//         super(name);
//         this.inventory = [];
//     }
//     pickUpItem(item) {
//         this.inventory.push(item);
//     }

//     getItems() {
//         return `${this.name} has following items ${this.inventory}`
//     }

//     getStatus() {
//         const status = super.getStatus();
//         return `${status} and has following items : ${this.inventory}`
//     }
//     /* The Hero class
//     The Hero class should inherit from Character. This new class should include additional functionality to manage an inventory of items that the hero can collect during gameplay.
    
//     Constructor:
//     - The constructor for the Hero class should initialize the hero with a name and an empty inventory for items.
    
//     Inventory Management:
//     - Implement a method pickUpItem that allows the hero to add items to their inventory.
//     - Items should simply be added to an array.
    
//     Item Retrieval:
//     - Implement a method getItems that returns a string listing all the items in the hero's inventory.
//     */

// }

// class Villain extends Character {
//     constructor(name, threat) {
//         super(name);
//         this.threat = threat;
//     }
//     getThreat() {
//         return `${this.threat}`
//     }
//     /* The Villain class
//     The Villain class should inherit from Character. This new class should include additional functionality to allow the villain to issue a threat.
    
//     Constructor:
//     - The constructor for the Villain class should initialize the villain with a name and a threat.
    
//     Threat
//     - The getThreat method should simply return the threat.
//     */
// }

// // Example Usage
// const merlin = new Hero("Merlin")
// const medea = new Hero("Medea")
// const troll = new Villain("Troll", 'I will destroy your soul!')

// console.log(troll.getThreat()) // I will destroy your soul!
// merlin.pickUpItem("Sword")
// merlin.takeDamage(15)
// medea.takeDamage(5)
// medea.pickUpItem("Shield")
// console.log(merlin.getItems()) // Merlin has the following items: Sword
// console.log(medea.getItems()) // Medea has the following items: Shield
// troll.takeDamage(101)
// console.log(troll.getStatus()) //Troll has 0 health and is dead.
// console.log(medea.getStatus()) // Medea has 95 health and is alive.`
// console.log(merlin.getStatus()) // Merlin has 85 health and is alive.
// console.log(`Total characters created: ${Character.getCount()} `) // Total characters created: 3



class Character {
    static count = 0
    #health = 100
    constructor(name) {
        this.name = name
        Character.incrementCount()
    }

    static incrementCount() {
        Character.count++
    }
    
    static getCount() {
        return Character.count
    }

    get health() {
        return this.#health
    }
    
    set health(value) {
        this.#health = Math.max(0, value)
    }
    
    takeDamage(amount) {
        this.health -= amount
    }
    
    get isAlive() {
        return this.#health > 0
    }
    
    getStatus() {
        return `${this.name} has ${this.health} health and is ${this.isAlive ? 'alive' : 'dead'}.`
    }
}

class Hero extends Character {
    constructor(name) {
        super(name)
        this.items = []
    }
    
    pickUpItem(item) {
        this.items.push(item)   
    }
    
    getItems() {
        return `${this.name} has the following items: ${this.items.join(", ")}`
    }
}

class Villain extends Character {
    constructor(name, threat) {
        super(name)
        this.threat = threat
    }
    
    getThreat() {
        return this.threat
    }
}

// Example Usage
const merlin = new Hero("Merlin")
const medea = new Hero("Medea")
const troll = new Villain("Troll", 'I will destroy your soul!')

console.log(troll.getThreat()) // I will destroy your soul!
merlin.pickUpItem("Sword")
merlin.takeDamage(15)
medea.takeDamage(5)
medea.pickUpItem("Shield")
console.log(merlin.getItems()) // Merlin has the following items: Sword
console.log(medea.getItems()) // Medea has the following items: Shield
troll.takeDamage(101)
console.log(troll.getStatus()) //Troll has 0 health and is dead.
console.log(medea.getStatus()) // Medea has 95 health and is alive.`
console.log(merlin.getStatus()) // Merlin has 85 health and is alive.
console.log(`Total characters created: ${Character.getCount()} `) // Total characters created: 3