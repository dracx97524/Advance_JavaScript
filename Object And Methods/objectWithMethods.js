const gamer = {
    name: 'Dave',
    score: 0,
    incrementScore: function(){ // Cannot use this with arrow functions ()=>{}
        // console.log(this);
        this.score++;
        // gamer.score++   
    }
}

gamer.incrementScore();
console.log(gamer);
