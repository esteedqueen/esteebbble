'use strict';

var controllers = angular.module('esteebble.controllers', []);

controllers.controller('AppCtrl', function ($scope) {
	$scope.name = "Dribbble Feed";
	$scope.updateName = function () {
		$scope.name = "World from function";
	}
});

controllers.controller('ShotsListCtrl', function ($scope, $routeParams, $http) {
	console.log($routeParams);

	 var list = $routeParams.list;

	$http.jsonp("http://api.dribbble.com/shots/"+list+"?callback=JSON_CALLBACK").then(function (data) {
		$scope.list = data.data;
		console.log(data);
	});
});

controllers.controller('OneShotCtrl', function ($scope, $routeParams, $http) {
	var id = $routeParams.id;
	$http.jsonp("http://api.dribbble.com/shots/"+id+"?callback=JSON_CALLBACK").then(function (data) {
	$scope.shot = data.data;
	console.log(data);
	});
});