// By using Constructor Functions

function Gamer(name,score){
    this.name = name;
    this.score = score;
    this.incrementScore = function(){
        this.score++
    }
}

const dracx = new Gamer('Dracx',8);
console.log(dracx);
dracx.incrementScore();
console.log(dracx);
dracx.incrementScore();
dracx.incrementScore();
console.log(dracx);

