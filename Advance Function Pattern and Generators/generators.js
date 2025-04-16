const slidesArr = [
    "1. Intro Slide", 
    "2. The current situation", 
    "3. Setbacks", 
    "4. Plans", 
    "5. A Positive Future"
]

function* generator(arr){
        for(const item of arr){
            yield item;
        }
}
const showSlide = document.getElementById('showSlide')
const slideGenerator = generator(slidesArr)

document.getElementById('nextSlideBtn').addEventListener('click', () => {
    const result =slideGenerator.next();
    if (!result.done) {
        let slide = document.createElement('p')
        slide.innerText = result.value
        showSlide.appendChild(slide)
    } else {
        let slide = document.createElement('p')
        slide.innerText = 'That is the end of the presentation!'
        showSlide.appendChild(slide)
        
    }
}) 