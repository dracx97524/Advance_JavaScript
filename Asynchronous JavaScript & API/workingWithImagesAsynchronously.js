// const image = document.createElement('img'); // by using dom 
// image.src = 'https://...'

const image2 = new Image(); // By using image constructor
image2.src = 'https://dog.ceo/api/breeds/image/random'


// console.log(image);
console.log(image2);


const a = image2.addEventListener('load',()=>console.log('image loaded'))
image2.addEventListener('error',()=>console.log('image not loaded'))

console.log(a)

/*
Challenge:
1. Create two event listeners. One should listen 
   out for the image loading and log “Image has 
   loaded”. The other should listen for an error 
   and log “Image has NOT loaded”.
*/