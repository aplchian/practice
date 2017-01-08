const {head,add,map,curry,compose,prop,tap} = require('ramda')
const RF = require('ramda-fantasy')
const P = require('pointfree-fantasy')
const Maybe = RF.Maybe
const Identity = RF.Identity
const Either = RF.Either
const IO = RF.IO
const Left = Either.Left
const Right = Either.Right
const test = require('tape')

const log = (x) => console.log('Res',x)


// ex 1
// Write a function that uses checkActive() and showWelcome() to grant access or return the error
// const showWelcome = compose(
//   i => `welcome ${i}`,
//   prop('name')
// )
//
// const checkActive = (user) => {
//   return user.active ? Right(user) : Left('Your Account is not active')
// }
//
// var ex1 = compose(
//   map(showWelcome),
//   tap(i => console.log(i)),
//   checkActive
// )
//
//
// test('ex1', t =>  {
//   let foo =
//   t.deepEquals(Left('Your Account is not active'), ex1({active: false, name: 'Gary'}))
//   t.deepEquals(Right('welcome Theresa'), ex1({active: true, name: 'Theresa'}))
//   t.end()
// })
//

// Exercise 2
// ==========
// Write a validation function that checks for a length > 3. It should return Right(x) if it is greater than 3 and Left("You need > 3") otherwise
console.log("--------Start exercise 2--------")

var ex2 = (x) =>  x.length > 3 ? Right(x) : Left("You need > 3")

// test('ex1', t =>  {
//   let foo =
//   t.deepEquals(Right("fpguy99"), ex2("fpguy99"))
//   t.deepEquals(Left("You need > 3"), ex2("..."))
//   t.end()
// })
// console.log("exercise 2...ok!")




// Exercise 3
// ==========
// Use ex2 above and Either as a functor to save the user if they are valid

// var save = function(x){ console.log("SAVED USER!"); return x; }
//
// var ex3 = compose(map(save),ex2)
//
// test('ex1', t =>  {
//   let foo =
//   t.deepEquals(Right("fpguy99"), ex3("fpguy99"))
//   t.deepEquals(Left("You need > 3"), ex3("duh"))
//   t.end()
// })


// Exercise 4
// ==========
// Get the text from the input and strip the spaces
console.log("--------Start exercise 4--------")

var getValue = function(x){ return document.querySelector(x).value }.toIO()
var stripSpaces = function(s){ return s.replace(/\s+/g, ''); }

var ex4 = compose(
  map(stripSpaces),
  getValue
)


test('ex1', t =>  {
  let foo =
  t.deepEquals("honkeytonk", runIO(ex4('#text')))
  t.end()
})
