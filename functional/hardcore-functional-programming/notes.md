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

example use of maybe with api call
```
// usually in your app you will get getting data from one place.
// so you can use the maybe there and it will run or not run... you dont just have a bunch // maybes everywhere

compose(map(f), Maybe, Api.get('/users/3'))
```

## Either

Typically used for pure error handling

Like Maybe, but with an error message embedded

has two subclasses: Left/Right

Maps the function over right, ignores the left

if Right, it runs.. if Left.. it doesn't run

```
map(x => x + 1,Right(2))
//=> Right(3)

map(x => x + 1,Left('Some Message'))
//=> Left('Some Message')

// left doesn't run the fn, it just returns the left with the error message
```

```
var determineAge = (user) => {
  return user.age ? Right(user.age) : Left("Couldn't get Age")
}

var yearOlder = compose(map(add(1)), determineAge)
// if determineAge is a right, map is running, if it's a left it returns the Left

yearOlder({age: 22})
//=> Right(23)

yearOlder({age:null})
//=> Left("Couldn't get Age")
```
