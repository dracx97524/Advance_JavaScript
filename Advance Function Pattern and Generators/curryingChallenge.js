/*
Challenge:
    1. Curry this function!
    Set up three partially applied functions called 'infoLogger', 
    'warnLogger', and 'errorLogger'. 
    The partially applied functions should have their level ('info', 
    'warn', 'error'). 
    You should be able to call these functions and pass in a message.
    E.g. console.log(warnLogger("Low disk space")) would log: "[WARN] Low disk space".
    🛟 hint.md for help.
*/
const createLogger = (level) => message => `[${level.toUpperCase()}] ${message}`

// Log messages with "info" level
const warnLogger = createLogger('WARN')
const infoLogger = createLogger('INFO')
const errorLogger = createLogger('ERROR')



console.log(warnLogger("Low disk space"))
console.log(warnLogger("High memory usage"))

console.log(infoLogger("Application started"))
console.log(infoLogger("User logged in"))

console.log(errorLogger("Unhandled exception"))
console.log(errorLogger("Failed to save file"))
