'use strict';

var controllers = angular.module('esteebble.controllers', []);

controllers.controller('AppCtrl', function ($scope) {
	$scope.name = "Dribbble Feed";
	$scope.updateName = function () {
		$scope.name = "World from function";
	}
});

controllers.controller('ShotsListCtrl', function ($scope, esteebble, $routeParams) {
	 console.log($routeParams);

	 var list = $routeParams.list;

	 esteebble.list(list).then(function (data) {
	 	$scope.list = data.data;
		console.log(data);
	 });

	 $scope.loadNextPage = function () {
	 	esteebble.list(list, {page: $scope.list.page+1}).then(function (data) {
	 		console.log(data);
	 		$scope.list.page = data.data.page;
	 		$scope.list.shots = $scope.list.shots.concat(data.data.shots);
	 	});
	 
	 }

	// $http.jsonp("http://api.dribbble.com/shots/"+list+"?callback=JSON_CALLBACK").then(function (data) {
	// 	$scope.list = data.data;
	// 	console.log(data);
	// });
});

controllers.controller('OneShotCtrl', function ($scope, $routeParams, esteebble) {
	var id = $routeParams.id;

	esteebble.shot(id).then(function (data){
		$scope.shot = data.data;
		console.log(data);
	});
	// $http.jsonp("http://api.dribbble.com/shots/"+id+"?callback=JSON_CALLBACK").then(function (data) {
	// $scope.shot = data.data;
	// console.log(data);
	// });
});