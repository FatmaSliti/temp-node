const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems); //[ 1, 2, 3, 4 ]

//font-family: "Segoe UI", Tahoma, sans-serif;
