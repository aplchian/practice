const {head,reduce,prop,set,lensProp,compose,tap} = require('ramda')


// ex3.. Use reduce to return an object of key value pairs from paired arrays,
// const data = [['name', 'Larry'], ['type', 'person'], ['address', '123 Main Street']]
//
// const fn = x => lensProp(head(x))
// const addProp = (acc,val) => set(fn(val),val[1],acc)
// const f2 = x => reduce(addProp,{},x)
//
// console.log(f2(data))


// ex 4. Use reduce to concat a variadic set of arguments into a single list
//
// const concat = (...args) => {
//   const fn = (acc,val) => [...acc,...val]
//   return reduce(fn,[],args)
// }
//
// var x = concat([1,2,3],[4,5,6],[7,8,9])
//
// console.log(x)




// 5. Use reduce to create your own filter function


const filter = (fn, list) => {
  reduce((acc,val) => {
    if(fn(val)){
      return [...acc,val]
    }else {
      return acc
    }
  },[],list)
}

// filter to even numbers
var x = filter(v => v % 2 === 0, [1,2,3,4,5,6,7,8,9,10])

console.log(x)
