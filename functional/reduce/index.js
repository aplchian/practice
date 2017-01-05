const {head,reduce,prop,set,lensProp,compose,tap,curry,ifElse} = require('ramda')


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
// //
// console.log(x)




// 5. Use reduce to create your own filter function
// filter to even numbers




const func = curry((fn2,acc,val) => fn2(val) ? [...acc,val] : acc)
const filter = (fn, list) => reduce(func(fn),[],list)
var x = filter(v => v % 2 === 1, [1,2,3,4,5,6,7,8,9,10])

console.log(x)
