// const nextCharForNumberString = str => {
//   const trimmed = str.trim()
//   const number = parseInt(trimmed)
//   const nextNumber = number + 1
//   return String.fromCharCode(nextNumber)
// }

// const nextCharForNumberString = str =>
//   String.fromCharCode(parseInt(str.trim()) + 1)

// const Box = x =>
// ({
//   map: f => Box(f(x)),
//   fold: f => f(x),
//   inspect: () => `Box(${x})`
// })
//
// const nextCharForNumberString = str =>
//   Box(str)
//   .map(s => s.trim())
//   .map(s => parseInt(s))
//   .map(i => i + 1)
//   .map(i => String.fromCharCode(i))
//   .fold(c => c.toLowerCase())
//
// const result = nextCharForNumberString(' 64 ')
//
// console.log(result)



//// 3


// const Either = Right || Left

const Right = x =>
({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  // inspect: () => `Right(${x})`
})

const Left = x =>
({
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`
})


const result = Right(2).map(x => x + 1).map(x => x / 2).fold(x => 'error',x => x)

console.log(result)
