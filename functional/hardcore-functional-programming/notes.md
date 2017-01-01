# Hardcore Functional Programming


## Maybe

safeGet
```
const safeGet = curry((x,o) => {
  return Maybe(o[x])
})

const user = {id: 2, name: "Albert"}

safeGet('name',user)

```

rewrite and if statement with maybe
```
// var ex4 = function(n) {
//   if(n){
//     return parseInt(n);
//   }
// }

const ex4 = (n) => map(i => parseInt(i),Maybe(n))

// t.deepEquals(Maybe(4), ex4("4"))

```
