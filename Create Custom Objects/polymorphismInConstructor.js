function Event(name, location, date) {
    this.name = name
    this.location = location
    this.date = date
}

Event.prototype.getDetails = function(){
    return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`    // Polymorphism

}


function Concert(name, location, date, headliner) {
    Event.call(this, name, location, date)
    this.headliner = headliner
}

Concert.prototype = Object.create(Event.prototype)
Concert.prototype.constructor = Concert



Concert.prototype.getDetails = function(){
    const event = Event.prototype.getDetails.call(this)
    return `${event} Headliner : ${this.headliner}`
}

const concert = new Concert("Summer Beats", "City Stadium", "2024-07-15", "The Electrons")
const concert2 = new Concert("Happy days", "Highlands Park", "2024-08-08", "Dave Notes")
const concert3 = new Concert("Lush Vibes", "Wembley", "2024-03-08", "Si Twig")
console.log(concert.getDetails())
console.log(concert2.getDetails())
console.log(concert3.getDetails())