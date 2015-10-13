/**
 * @license
 * counter 0.0.1 - A counter for Node.js.
 * Copyright 2015 Danny Nemer
 * Available under MIT license <http://opensource.org/licenses/MIT>
 */

var util = require('dantil')

/**
 * Used as a key-value map for counters.
 *
 * @private
 * @type Map
 */
var _counts = new Map()

/**
 * Counts the number of times a section of code is reached, identified by `label`. Use `counter.end(label)` to print the counter's value. This is useful for profiling complex programs.
 *
 * @static
 * @memberOf counter
 * @param {string} label The counter identifier.
 * @example
 *
 * for (var i = 0; i < 100; ++i) {
 *   if (i % 2 === 0) counter.count('even')
 * }
 *
 * counter.end('even')
 * // => Resets the count for 'even' to 0
 * // => Prints "even: 50"
 */
exports.count = function (label) {
	var val = _counts.get(label) || 0
	_counts.set(label, val + 1)
}

/**
 * Prints (and resets the value of) the number of calls of `counter.count(label)`.
 *
 * @static
 * @memberOf counter
 * @param {string} label The counter identifier.
 */
exports.end = function (label) {
	// Print even if count is 0 to acknowledge never being reached.
	var count = _counts.get(label) || 0

	util.log(label + ':', count)

	// Reset count.
	_counts.delete(label)
}

/**
 * Prints (and resets) the values of all counters used on `counter.count()`. Does not print counters that are never reached (and never have their keys initialized).
 *
 * @static
 * @memberOf counter
 * @example
 *
 * for (var i = 0; i < 100; ++i) {
 *   if (i % 2 === 0) counter.count('even')
 *   if (i % 2 === 1) counter.count('odd')
 *   if (i > 100) counter.count('never reached')
 * }
 *
 * counter.endAll()
 * // => Resets all counts to 0
 * // => Prints: even: 50
 * //            odd: 50
 */
exports.endAll = function () {
	_counts.forEach(function(count, label) {
		util.log(label + ':', count)
	})

	// Reset all counts.
	_counts.clear()
}