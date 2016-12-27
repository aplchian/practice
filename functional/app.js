const {Maybe} = require('ramda-fantasy')
const {map} = require('ramda')

// var safeHead = function(xs){
//   return Maybe.of(xs[0])
// }

var arr = [1,2,3,4,5]
var log = console.log

// safeHead().map(i => console.log(i))



// map(i => log(i),safeHead(arr))

var withdraw = (amount,balance) => {
  return balance >= amount ?
   Maybe.of({
      balance: balance - amount,
    }) :
   Maybe.of(null)
}

var f = withdraw(20,30)

console.log(map(i => i.balance,f))
