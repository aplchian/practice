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

* isn't as useful with async

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

## IO

A functor --- but instead of str, number, etc... it holds a function

A lazy computation 'builder'

Typically used to contain side-effects

You must runIO to perform the operation

Map appends the function to a list of things to run the effectful value

io ex 1
```
var email_io = IO(function(){return $("#email").val() })
// *the value of the email field goes into concat
var msg_io = map(concat("welcome"),email_io)

runIO(msg_io)

//=> "welcome steve@gmail.com"

```

io ex 2
```
var getBgColor = compose(get('background-color'),JSON.parse)
var bgPref = compose(map(getBgColor),Store.get("preferences"))

var app = bgPref()
//=> IO()

// runIO(app)
//=> #efefef
```

// if you need to pass arguments to functions that take arguments
```

var email_io = IO(function(){return $("#email").val()})

var getValue = function(sel){ return $(sel).val()}.toIO()

```


## EventStream

 An infinite list of results

 Dual of Array

 It's map is sometimes lazy

 Calls the mapped function each time an event happens
```
 var id_s = map(function(e){return '#'+e.id}, Bacon.fromEventTarget(document,"click"))
 //=> EventStream(String
var element_s = map(document.querySelector,id_s)
//=> EventStream(Element)


id_s.onValue(function(id){ alert('you clicked'+id) })
element_s.onValue(function(el){alert('The inner html is' + el.innerHTML)})

```


...

## Future

has an eventual value

similar to a promise, but it's lazy

You must fork it to kick it off

It takes a function as it's value

Calls the function with it's results once it is there

```
var makeHtml = function(post){
  return `<div>${post.title}</div`
}
var page_f = map(makeHtml,http.get('/posts/2'))

page_f.fork(function(err){throw(err)},
function(page){$("#container").html(page)})

```
