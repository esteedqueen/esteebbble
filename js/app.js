'use strict';

var app = angular.module('esteebble', ['ngRoute', 'esteebble.controllers']);

app.config(function ($routeProvider) {
	$routeProvider
	.when("/:list", {controller:'ShotsListCtrl', templateUrl: "partials/shots_list.html"});
});