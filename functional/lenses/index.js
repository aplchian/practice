const {lensProp,view,set,lensPath} = require('ramda')

const user = {
  id: 1,
  name: 'foo',
  company: {
    id: 12,
    name: 'bar',
    address: {
      street: 'randomstreet',
    }
  },
  comments: [
    {id: 2, text: 'yes, this could work.', to: {id: 4}},
    {id: 3, text: 'not sure.', to: {id: 12}},
    {id: 4, text: 'well, maybe', to: {id: 4}},
  ],
}

const idLens = lensProp('id')
const streetLens = lensPath(['company','address','street'])

var x = view(idLens, user)
var y = set(idLens,2,user)
var z = view(streetLens,user)
var a = set(streetLens,'goodstreet',user)

console.log(a)
