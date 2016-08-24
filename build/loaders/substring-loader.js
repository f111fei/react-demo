var path = require("path");
var loaderUtils = require("loader-utils");

module.exports = function(source) {
	// debugger;
    // this.cacheable();
    var query = loaderUtils.parseQuery(this.query);
	var start = query.start;
	var end = query.end;

	var startIndex, endIndex;
	if (start) {
		startIndex = source.search(new RegExp(start, 'g'));
	} else {
		startIndex = 0;
	}
	if (end) {
		endIndex = source.search(new RegExp(end, 'g'));
		if (endIndex < 0) {
			endIndex = undefined;
		}
	} else {
		endIndex = undefined;
	}
	return source.substring(startIndex, endIndex);
};

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
    console.log(remainingRequest, precedingRequest, data);
};