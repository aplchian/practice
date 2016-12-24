const Maybe = require('ramda-fantasy').Maybe

const R = require('ramda')

const add1 = a => a + 1

function Maybe(x) { //<-- main constructor that returns Maybe of Just or Nothing
  return x == null ? _nothing : Maybe.Just(x);
}

console.log(Maybe('2'))

// class MyFunctor {
//
//   constructor(value) {
//     this.val = value;
//   }
//
//   map(fn) {
//    return new Myfunctor(fn(this.val));
//   }
//
// }


//temp is a Functor instance that's storing value 1

// let temp = new MyFunctor(1)
//
// let temp2 = temp.map(add1)
//
// console.log(temp2)
