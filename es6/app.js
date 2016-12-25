// function foo(){
//   return [1,2,3,5,6,2,4235,44,5,]
// }
//
// var a,b,c,args
//
// var o = {}
//
// [
//   o.a,
//   o.b = 42,
//   o.c,
//   ...o.args
// ] = foo()
//
// console.log(args)
//
//
// var x = 10, y = 20
//
// [x,y] = [y,x]

// var a =  [1,2,3,5,42,35,6]
//
// var [x,y,...a] = a
//
// console.log('x:',x,'y:',y,'rest:',a)


// function foo(){
//   return {a:1, b:2, c:3, d:{e: 4}}
// }
//
// var {
//   a,
//   b: X = 42,
//   c,
//   d: {
//     e
//   }
// } = foo() || {}
//
// {a: X = 2} = ..
//
// console.log(d

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
