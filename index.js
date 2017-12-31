'use strict';
module.exports = function () {
	let ret = 0;
	const len = arguments.length;

	for (let i = 0; i < len; i++) {
		const x = arguments[i];

		if (x === Infinity || x === -Infinity) {
			return Infinity;
		}

		ret += x * x;
	}

	return Math.sqrt(ret);
};
