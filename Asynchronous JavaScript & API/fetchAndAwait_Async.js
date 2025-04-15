
async function getMyDog(){
const response  = await fetch('https://dog.ceo/api/breeds/image/random')
const data = await response.json();
console.log(data);
}

getMyDog()