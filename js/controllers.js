'use strict';

/* Controllers */

app.controller("appController", [ "$scope", function($scope) {
	window.my_scope = $scope 
	$scope.truthy = true;
	$scope.oneAtATime = true;
	$scope.open = function () {
		$scope.shouldBeOpen = true;
	};
	$scope.close = function () {
		$scope.shouldBeOpen = false;
	};
	$scope.opts = {
		backdropFade: true,
		dialogFade: true
	};

	angular.extend($scope, {
		center: {
			lat: 22.25018,
			lng: 114.18571,
			zoom: 13
		},
		defaults: {
			tileLayer: 'http://{s}.tile.cloudmade.com/{key}/{style}/256/{z}/{x}/{y}.png',
			maxZoom: 16,
			minZoom: 11,
        	style: 97679, // added corresponding value in leaflet directive
        	key: 'BC9A493B41014CAABB98F0471D759707', // added corresponding value in leaflet directive
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="http://cloudmade.com">CloudMade</a>',

        }
    });

}]);

