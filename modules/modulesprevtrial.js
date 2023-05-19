//Modules

// const fatma = "Fatma"
// const leila = "Leila"

// const sayHi = (name) => {
//     console.log(`Hello there ${name}`)
// }

// sayHi("Fatma")
// sayHi(fatma)
// sayHi(leila)


// common js , every file is module by default
// Modules - Encapsulated code (only share minimum)

const names = require('./names')
// console.log(names);

const sayHi = require("./utils")
// console.log(sayHi)

const data = require('./alternativesyntax')
// console.log(data);

require('./mindgrenade'); //the sum is : 15

// sayHi("islem")
// sayHi(names.fatma)
// sayHi(names.leila)

