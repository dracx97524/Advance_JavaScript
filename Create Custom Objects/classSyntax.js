// Classess = Template of Object
// By using Classes

class Gamer{
    constructor (name,score){
        this.name = name;
        this.score = score;
    }

    incrementScore (){
        this.score++;
    }
}

const dracx = new Gamer('Dracx',0);
dracx.incrementScore();
console.log(dracx);
