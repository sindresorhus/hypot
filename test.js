'use strict';
var test = require('ava');
Math.hypot = undefined;
var hypot = require('./');

function isNan(x) {
	return x !== x;
}

test(function (t) {
	t.assert(hypot() === 0);
	t.assert(hypot(0) === 0);
	t.assert(hypot(1) === 1);
	t.assert(hypot(2) === 2);
	t.assert(hypot(-3) === 3);
	t.assert(hypot(0, 0, 1) === 1);
	t.assert(hypot(0, 1, 0) === 1);
	t.assert(hypot(1, 0, 0) === 1);
	t.assert(hypot(3, -4) === 5);
	t.assert(hypot(3, 4) === 5);
	t.assert(hypot(3, 4, 5) === 7.0710678118654755);
	t.assert(hypot(0, -0) === 0);
	t.assert(hypot(0, 0) === 0);
	t.assert(hypot(0, 1) === 1);
	t.assert(hypot(0, -1) === 1);
	t.assert(hypot(-0, -0) === 0);
	t.assert(hypot(-0, 0) === 0);
	t.assert(hypot(-0, 1) === 1);
	t.assert(hypot(-0, -1) === 1);
	t.assert(hypot(-3, 4) === 5);
	t.assert(hypot(Infinity, 0) === Infinity);
	t.assert(hypot(-Infinity, 0) === Infinity);
	t.assert(hypot(0, Infinity) === Infinity);
	t.assert(hypot(0, -Infinity) === Infinity);
	t.assert(hypot(Infinity, NaN) === Infinity);
	t.assert(hypot(NaN, -Infinity) === Infinity);
	t.assert(isNan(hypot(NaN)));
	t.assert(isNan(hypot(3, 4, 'foo')));
	t.assert(isNan(hypot(NaN, 0)));
	t.assert(isNan(hypot(0, NaN)));
	t.end();
});