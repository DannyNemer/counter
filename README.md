# counter

A counter for profiling in Node.js.

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

<!-- div class="toc-container" -->

<!-- div -->

## `counter`
* <a href="#counter-count">`counter.count`</a>
* <a href="#counter-end">`counter.end`</a>
* <a href="#counter-endAll">`counter.endAll`</a>

<!-- /div -->

<!-- /div -->

<!-- div class="doc-container" -->

<!-- div -->

## `counter`

<!-- div -->

### <a id="counter-count"></a>`counter.count(label)`
<a href="#counter-count">#</a> [&#x24C8;](https://github.com/DannyNemer/counter/blob/master/counter.js#L34 "View in source") [&#x24C9;][1]

Increments the invocation count for `label`. Use `counter.end(label)` or `counter.endAll()` to print the counter's value. This is useful for profiling the number of times a section of code is reached.

#### Arguments
1. `label` *(string)*: The counter identifier.

#### Example
```js
for (var i = 0; i < 100; ++i) {
  if (i % 2 === 0) counter.count('even')
}

counter.end('even')
// => Resets the count for 'even' to 0
// => Prints "even: 50"
```
* * *

<!-- /div -->

<!-- div -->

### <a id="counter-end"></a>`counter.end(label)`
<a href="#counter-end">#</a> [&#x24C8;](https://github.com/DannyNemer/counter/blob/master/counter.js#L45 "View in source") [&#x24C9;][1]

Prints (and resets the value of) the number of `counter.count(label)` invocations.

#### Arguments
1. `label` *(string)*: The counter identifier.

* * *

<!-- /div -->

<!-- div -->

### <a id="counter-endAll"></a>`counter.endAll`
<a href="#counter-endAll">#</a> [&#x24C8;](https://github.com/DannyNemer/counter/blob/master/counter.js#L73 "View in source") [&#x24C9;][1]

Prints (and resets the values of) the counter value of each label recorded by `counter.count()`, and each counter's value as a percentage of all counters.
<br>
<br>
Does not print counters that are never reached (having not initialized their keys). Prints counts in order of decreasing value.

#### Example
```js
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
* * *

<!-- /div -->

<!-- /div -->

<!-- /div -->

 [1]: #counter "Jump back to the TOC."
