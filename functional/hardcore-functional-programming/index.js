const {head,add,map,curry} = require('ramda')
const RF = require('ramda-fantasy')
const P = require('pointfree-fantasy')
const compose = P.compose
const Maybe = RF.Maybe
const Identity = RF.Identity
const test = require('tape')

const log = (x) => console.log('Res',x)


//example 1
// {
//   let ex1 = (x) => map(add(1),x)
//   let x = ex1(Identity(3))
//   log(x)
//   test('ex1', t =>  {
//     let foo =
//     t.deepEquals(Identity(4), ex1(Identity(3)))
//     t.end()
//   })
// }


//example 2
//use head to get the first element of the list
// {
//   let ex2 = (x) => map(head,x)
//   let xs = ['do','ray','me','fa']
//   test('ex1', t =>  {
//     let foo =
//     t.deepEquals(Identity('do'), ex2(Identity(xs)))
//     t.end()
//   })
// }

//example 3
// Use safeGet and _.head to find the first initial of the user
// {
//   const user = {id: 2, name: "Albert"}
//   const safeGet = curry((x,o) => {
//     return Maybe(o[x])
//   })
//   const ex3 = (o) => map(head,safeGet('name',o))
//   test('ex1', t =>  {
//     let foo =
//     t.deepEquals(Maybe('A'), ex3(user))
//     t.end()
//   })
// }



//example 4
// Use Maybe to rewrite ex4 without an if statement
{
  //rewrite with Maybe
  // var ex4 = function(n) {
  //   if(n){
  //     return parseInt(n);
  //   }
  // }
  const ex4 = (n) => map(i => parseInt(i),Maybe(n))

  test('ex1', t =>  {
    t.deepEquals(Maybe(4), ex4("4"))
    t.end()
  })
}
