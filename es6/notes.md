# es6 the good parts

declaritive coding does seem to be

es6 is really about adding more declaritive forms

## arrow functions

variations

```
() => 2
x => 3
_=>3

(...x) => 3

// headless arrow function .. in the works
=> 3
var foo = => 3

```

## const

`const` is a variable that can't be reassigned.  

```
const y = [0,1,2]

/// this works
y[0] = 42

// makes the array immutable
var x = Object.freeze([1,2,3])

```

## default args

```
function foo(x) {
  x = x !== undefined ? x : 42
}

foo(undefined)

// or

function bar(){
  console.log("!")
}

function foo(x = bar()){

}

// bar hasnt been called at all here
foo(1)

// bar is called once, because it is needed now.
foo()

// usage

function uniqId(){
  console.log('unique id')
}

// takes in an id, if none provided, it makes one
function foo(id = uniqId(), x = id){

}

```

## rest/gather operator

if ... is used on the left hand side of an equals, in an assignment context, it is a gather/rest as opposed to a spread

```
// this function can take as many args as it wants


function bar(x,y){
  console.log('bar',x,y)
}

function foo(...args){
  bar('yeah',...args)
}

foo('alex','is','cool')



//// ex. 2

//imperative from
var  x = [1,2,3]
var y = [4,5]
var z = [0].concat(x,y,[6])

var x = [1,2,3]
var y = [4,5]
var z = [0,...x,...y,6]

var str = "Hello"
//old
str.split('')

//new
[...str]

```

## desctructuring

destructuring is an assignment operation

```
// array desctructuring

function foo(){
  return [1,2,3]
}

var [
  a,
  b = 42,
  c
] = foo()

/// if foo returns null

function foo(){
  return null
}

var [
  a,
  b = 42,
  c,
  ...args
  //gathers the rest of the values into an array called args
] = foo() || []


//// ex 3.

var a,b,c,args

var o = {}

[
  o.a,
  o.b = 42,
  o.c,
  ...o.args
] = foo()


/// ex 4.

function foo(){
  return [1,2,3,[4,5,6]]
}

var a,b,c,args,d,e

[
  a,
  b = 42,
  c,
  [
    d,
    ,
    e
  ]
] = foo()


```

```
var a =  [1,2,3]

[x,y,...a] = [0,...a, 4]

//or

[ , , ...a] = [0, ...a, 4]

```

```
function foo(){
  return [1,2,3,4,[5,6,7]]
}

var a,b

var x = [a,b] = foo()

console.log(x) /// [1,2,3,4,[5,6,7]]
```
## object destructuring

```
function foo(){
  return {a:1, b:2, c:3}
}

var {
  a,
  b: X = 42,
  c
} = foo() || {}

```

## objects

```
//concise
 var a = 1
 var c = "hello"
 var obj = {
   a,
   b() {},
   [c]: 42,
   [c+"fn"]() {},
   *foo(){}, //concise generator
   *[c+"gn"]() {}

 }
```

## template strings

```
function foo(strings,...values){
  console.log('strings',strings)
  console.log('values',values)
  return "I am evil"
}

var name = "alex"
var age = 24

var msg = foo`Hi ${name}
your age is ${age}`

console.log(msg)
```

## iterators

```
var arr = [1,2,3]
var str = 'Hello'

for (var v of str){
  console.log(v)
}

[...str]

var [x,y, ...rest] = [ ...str ]

```
