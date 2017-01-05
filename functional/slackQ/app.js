const {reduce,add,lensProp,set,compose,head,lenseIndex,view,curry: C} = require('ramda')

const data = [['name', 'Larry'], ['type', 'person'], ['address', '123 Main Street']]

const propLense = lenseIndex(1)
const propVal = (x) => C(view(propLense,x))
const f = (acc,val) => set(lensProp(head(val)),val[1],acc)

var x = reduce(f,{},data)

console.log(x)
