'use strict';

var controllers = angular.module('esteebble.controllers', []);

controllers.controller('AppCtrl', function ($scope) {
	$scope.name = "Dribbble Feed";
	$scope.updateName = function () {
		$scope.name = "World from function";
	}
});

controllers.controller('ShotsListCtrl', function ($scope, $http) {
	$scope.list;

	$http.jsonp("http://api.dribbble.com/shots/popular?callback=JSON_CALLBACK").then(function (data) {
		$scope.list = data.data;
		console.log(data);
	});



})