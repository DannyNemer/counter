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

for (var i = 0; i < 99; ++i) {
  counter.count(i % 2 === 0 ? 'even' : 'odd')
  if (i > 100) counter.count('never reached')
}

counter.endAll()
// => Resets all counts to 0
// => Prints "even: 50 (50.5%)
//            odd: 50 (49.5%)"
```