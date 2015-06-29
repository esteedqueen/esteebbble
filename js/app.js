'use strict';

var app = angular.module('esteebble', ['ngRoute', 'esteebble.controllers', 'esteebble.filters', 'esteebble.services']);

app.config(function ($routeProvider) {
	$routeProvider
	.when("/:shots/:id", {controller:'OneShotCtrl', templateUrl: "partials/shot.html"})
	.when("/:list", {controller:'ShotsListCtrl', templateUrl: "partials/shots_list.html"})
	.otherwise({redirectTo: "/popular"});
});