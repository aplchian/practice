const {head,add,map,curry,compose,prop} = require('ramda')
const RF = require('ramda-fantasy')
const P = require('pointfree-fantasy')
const Maybe = RF.Maybe
const Identity = RF.Identity
const Either = RF.Either
const Left = Either.Left
const Right = Either.Right
const test = require('tape')

const log = (x) => console.log('Res',x)


// ex 1
// Write a function that uses checkActive() and showWelcome() to grant access or return the error
const showWelcome = compose(i => `welcome ${i}`,prop('name'))

const checkActive = (user) => {
  return user.active ? Right(user) : Left('Your Account is not active')
}

var ex1 = (x) => {
  return map(showWelcome)(x)
}


test('ex1', t =>  {
  let foo =
  t.deepEquals(Left('Your Account is not active'), ex1({active: false, name: 'Gary'}))
  t.deepEquals(Right('welcome Theresa'), ex1({active: true, name: 'Theresa'}))
  t.end()
})
