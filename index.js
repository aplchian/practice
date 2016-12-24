const {Identity,Maybe} = require('ramda-fantasy')
const {add,map} = require('ramda')

const five = Identity(5)

var x = five.map(add(1))

console.log(Maybe(null))
