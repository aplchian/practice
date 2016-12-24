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
