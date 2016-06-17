A profiling counter for Node.js.

#### Installation
```shell
npm install dannynemer/counter
```

#### Usage
```js
var counter = require('counter')

for (var i = 0; i < 100; ++i) {
  if (i % 2 === 0) counter.count('even')
}

counter.end('even')
// => Resets the count for 'even' to 0
// => Prints "even: 50"

for (var i = 0; i < 100; ++i) {
  if (i % 2 === 0) counter.count('even')
  if (i % 2 === 1) counter.count('odd')
  if (i > 100) counter.count('never reached')
}

counter.endAll()
// => Resets all counts to 0
// => Prints "even: 50
//            odd: 50"
```