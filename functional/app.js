const {Maybe} = require('ramda-fantasy')
const {map,assoc,compose,join,split,tap,omit,path,isNil,always,identity} = require('ramda')

// var safeHead = function(xs){
//   return Maybe.of(xs[0])
// }

// var arr = [1,2,3,4,5]
// var log = console.log

// safeHead().map(i => console.log(i))



// map(i => log(i),safeHead(arr))

// var withdraw = (amount,balance) => {
//   return balance >= amount
//     ? Maybe.of({
//       balance: balance - amount,
//     })
//     : Maybe.of(null)
// }
//
// var f = withdraw(20,30)
//
// console.log(map(i => i.balance,f))

// assoc



// var id = `alex is the cool guy`.split(' ').join('_')
// var type = "user"
// var bands = [
//   "band_Atlas_Road_Crew",
//   "band_The_Beatles"
// ]
//
// var obj = {}
//
// var doc = assoc('_id',id,obj)
//
// var fn = compose(
//   assoc('bands',['slo','arc','rks']),
//   assoc('type',"user"),
//   assoc('_id',id)
// )

// const doc = {
//   type: "concert",
//   name: "Bonnaroo",
//   date: "adsadTdfsdfd",
//   newevent: true,
//   "newcontact": {
//     hi: "adsda"
//   }
// }
//
// const id = (date,doc) =>
//   compose(
//     join('_'),
//     split(' ')
//   )(`event_${date}_${doc.type}_${doc.name}`)
//
//
// const buildEvent = (date,doc) =>
//   compose(
//     omit(['newevent','newcontact']),
//     assoc('_id',id(date,doc))
//   )(doc)
//
//
// var x = buildEvent('theDaT34343',doc)
//
// console.log(x)


// console.log(doc)
const ifElse = function(predicate,onTrue,onFalse){
  return function(x){
    return predicate(x) ? onTrue(x) : onFalse(x)
  }
}

const pathOr = (defaultValue, pathList, obj) => {
  const getVal = x => ifElse(isNil,always(defaultValue),identity)(x)
  return compose(
    getVal,
    path(pathList)
  )(obj)
}

var obj = {
  color: 'red',
  age: 23,
  brothers: {
    alex: {
      age: 4
    }
  }
}

var x = pathOr(51,['brothers','alex','age'],obj)

console.log(x)
