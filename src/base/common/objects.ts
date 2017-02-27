'use strict';

export function withoutProperties(obj: any, keys: string[]): any {
	let target = {};
	for (var i in obj) {
		if (keys.indexOf(i) >= 0) {
			continue;
		}
		if (!Object.prototype.hasOwnProperty.call(obj, i)) {
			continue;
		}
		target[i] = obj[i];
	}
	return target;
}