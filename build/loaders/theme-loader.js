var path = require("path");
var loaderUtils = require("loader-utils");

const style = {
    end: '//dark-theme'
};
const dark_style = {
    start: '//dark-theme'
};

const themes = {
	common: {
		start: undefined,
		end: '//dark-theme'
	},
	dark: {
		start: '//dark-theme',
		end: undefined
	}
}

module.exports = function (source) {
	debugger;
	var commonSource;
	for (var name in themes) {
		var content = getThemeContent(name, source);
		if (name === 'common') {
			commonSource = content;
		} else {
			emitTheme(name, source);
		}
	}
	return commonSource;
};

function emitTheme(name, source) {

}

function getThemeContent(name, source) {
	var query = themes[name];
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
	if (start < 0) {
		return '';
	}
	return source.substring(startIndex, endIndex);
}