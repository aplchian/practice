## map

A function that needs to have access to data, and a function that transforms that data. Output based on the data it receives.

In a conventional map, its a function that receives two args.. an array and the function.  An array is mappable, so map can be called on an array.

The array map calls the function on each index item and sets that index equal to the return value.

A functor is piece of data that can have a map function. An Array is a functor.  But you can also have functors that aren't arrays.  

box is a functor.. the map receives a function and has access to argument coming in

```js
{
  const Box = x =>
  ({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box(${x})`
  })

  const nextCharForNumberString = str =>
    Box(str)
    .map(s => s.trim())
    .map(s => parseInt(s))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i))
    .fold(c => c.toLowerCase())

  const result = nextCharForNumberString(' 64 ')

}

```
()

map returns a new box that holds the value of the the
