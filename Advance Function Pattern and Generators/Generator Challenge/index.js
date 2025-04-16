/*
Challenge:
    1. Create a generator that yields a random hex code on demand.
    - You might need to research how you can do something infinitely 
      inside a generator.
    - See if you can work out how to generate a random hex code.
    🛟 hint.md for help
*/



  
function* randomHexGenerator(){
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    yield '#' + n.slice(0, 6);
}




document.getElementById('nextColorButton').addEventListener('click', () => {
    /*
    Challenge:
        2. When the "Next Color" button is clicked, update 
           the textContent and backgroundColor attributes below.

    */

            const hexvalue = randomHexGenerator().next()
            console.log(hexvalue.value);
            document.getElementById('colorText').textContent = hexvalue.value
            document.getElementById('colorDisplay').style.backgroundColor = hexvalue.value
    })
    


