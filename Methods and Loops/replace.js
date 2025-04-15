// const paragraph = "js is the backbone of the internet. It was created in 1995. Before js, websites were so boring."
// const sentence = "i went to Australia and i saw a shark"

// console.log(paragraph.replace('js', 'JS')) // only first instance
// console.log(paragraph.replaceAll('js', 'JS'));

// console.log(sentence.replaceAll('i','I'))


// Regex

// console.log(sentence.replaceAll(/\b(i)\b/g,'I'))


const sentence = "I love you with all my heart love!"

console.log(sentence.replaceAll(/\b(love|heart)\b/g, function(match){
    return `💜`
}))



const paragraph = "javaScript is the backbone of the internet. it was created in 1995. before JS, websites were so boring"
const p2 = paragraph.replace(/(^\s*\w|(?<=\.\s*)\w)/g, function(match){return match.toUpperCase()});
console.log(p2)