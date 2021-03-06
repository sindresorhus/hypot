import test from 'ava';
import numberIsNan from 'number-is-nan';
import m from '.';

test(t => {
	t.is(m(), 0);
	t.is(m(0), 0);
	t.is(m(1), 1);
	t.is(m(2), 2);
	t.is(m(-3), 3);
	t.is(m(0, 0, 1), 1);
	t.is(m(0, 1, 0), 1);
	t.is(m(1, 0, 0), 1);
	t.is(m(3, -4), 5);
	t.is(m(3, 4), 5);
	t.is(m(3, 4, 5), 7.0710678118654755);
	t.is(m(0, -0), 0);
	t.is(m(0, 0), 0);
	t.is(m(0, 1), 1);
	t.is(m(0, -1), 1);
	t.is(m(-0, -0), 0);
	t.is(m(-0, 0), 0);
	t.is(m(-0, 1), 1);
	t.is(m(-0, -1), 1);
	t.is(m(-3, 4), 5);
	t.is(m(Infinity, 0), Infinity);
	t.is(m(-Infinity, 0), Infinity);
	t.is(m(0, Infinity), Infinity);
	t.is(m(0, -Infinity), Infinity);
	t.is(m(Infinity, NaN), Infinity);
	t.is(m(NaN, -Infinity), Infinity);
	t.true(numberIsNan(m(NaN)));
	t.true(numberIsNan(m(3, 4, 'foo')));
	t.true(numberIsNan(m(NaN, 0)));
	t.true(numberIsNan(m(0, NaN)));
});
