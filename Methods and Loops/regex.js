const paragraph = "javaScript is the backbone of the internet. it was created in 1995. before JS, websites were so boring"

console.log(paragraph.replaceAll(/(?:^|\.\s)([A-Za-z])/g, function(match){
    return match.toUpperCase()
}))

const text = "Please switch off the WIFI before you leave."
const userInput = "wifi"

const regex = new RegExp(userInput, 'gi')

const doesMatch = regex.test(text) //boolean

console.log(doesMatch)