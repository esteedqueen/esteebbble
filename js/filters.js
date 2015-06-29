'use strict';

var filters = angular.module('esteebble.filters', []);

filters.filter('esteebbleDate', function ($filter) {
	return function (value, format) {
		console.log(value, format);
		if (value) {
			value = Date.parse(value)
		};
		return $filter('date')(value,format);
	}
});
