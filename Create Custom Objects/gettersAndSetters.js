class Holiday {
    #destination
    constructor(destination, price) {
        this.#destination = destination
        this.price = price
    }
    get destination(){ // #destination cannot be modified
        return this.#destination; // Getter
    }
    set destination(newDestination){ // Can Modify the #destination
        if(typeof newDestination !== 'string' || newDestination.length <= 0){ //Setter
            throw new Error('Destination Not Valid')
        }
        this.#destination = newDestination;
    }
    
}

const safari = new Holiday('Kenya', 1000);
safari.destination = 'Tanzania';
console.log(safari.destination);
