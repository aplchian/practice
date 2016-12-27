const {head} = require('ramda')

// var arr = [1,2,3]
// var str = "HELLO!!!!"
//
// var it = arr[Symbol.iterator]()
//
//
// for(var v of str){
//   console.log(v)
// }
//
//
// console.log([...str])
//
// var [x,y,...rest] = str
//
// console.log(rest)

// an iterator is an object that has a .next method on it
//
// var obj = {
//   [Symbol.iterator](){
//     var idx = this.start, en = this.end
//     var it = {
//       next: () => {
//         if(idx <= en){
//           var v = this.values[idx]
//           idx++
//           return {value: v, done: false}
//         }else{
//           return {done: true}
//         }
//       }
//     }
//     return it
//   },
//   values: [2,4,6,8,10,12,14,16,18,20,22,24,26,28],
//   start: 4,
//   end: 13
// }
//
// var vals = [...obj]
//
// console.log(vals)

// function *main(){
//   console.log('hello')
//   yield 9
//   console.log('World')
//   yield 10
// }

// function *main(){
//   for(var i=0; i<5; i++){
//     yield i
//   }
// }
//
// var it = main()
//
// for(var v of main()){
//   console.log(v)
// }
//
// console.log([...it])


// var numbers = {
//   *[Symbol.iterator]({
//     start = 0,
//     step = 1,
//     end  = 100,
//   } = {}) {
//       for(let i=start; i<=end; i + step){
//         yield i
//       }
// }
//
// for(let num of numbers[Symbol.iterator]({
//   start: 6,
//   step: 4,
//   end: 30
// })){
//   console.log(num)
// }
//
// for(let num of  **){
//   console.log(num)
// }
//
// Number.prototype[Symbol.iterator] = function*(){
//   for (var i = 0; i <= this; i++){
//     yield i
//   }
// }
//
// console.log([...8])

var a = ['x']

console.log(head(a))
