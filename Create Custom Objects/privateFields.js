class Holiday {
    #destination // Private Field that cannot be changed outside the object
    constructor(destination, price) {
        this.#destination = destination
        this.price = price
    }
}

const safari = new Holiday('Kenya', 1000)
// safari.#destination ='Tanzania' // Do not work
console.log(safari)