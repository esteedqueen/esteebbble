'use strict';

var services = angular.module('esteebble.services', []);

services.factory('esteebble', function ($http) {
	function load (path, params) {
		params = params || {};
		params.callback = "JSON_CALLBACK"
		return $http.jsonp("http://api.dribbble.com"+ path, {params: params});
	}
	return {
		list: function (type, params) {
			return load("/shots/" + type, params);
			
		},
		shot: function (id) {
			return load("/shots/" + id);
		}
	}
})
