'use strict';
module.exports = Math.hypot || function () {
	var ret = 0;
	var len = arguments.length;

	for (var i = 0; i < len; i++) {
		var x = arguments[i];

		if (x === Infinity || x === -Infinity) {
			return Infinity;
		}

		ret += x * x;
	}

	return Math.sqrt(ret);
};
