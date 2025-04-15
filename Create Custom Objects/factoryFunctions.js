
// const gamer = {
//     name: 'Dave',
//     score: 0,
//     incrementScore: function(){
//         this.score++   
//     }
// } 



// By using factory Functions

function gamer(name,score){
    return {
        name, //Object Property Shorthand
        score,
        incrementScore(){
          this.score++   
         }
    }
}

const dracx = gamer('Dracx',5);
console.log(dracx);
dracx.incrementScore();
console.log(dracx);


