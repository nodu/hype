'use strict';

/* Controllers */

app.controller("appController", [ "$scope", function($scope) {
	window.my_scope = $scope 
	
	// For ng-show/ng-hide
	$scope.truthy = true;
	// For accordion:
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
	// For showing/hiding the mobile version's containers/navs
	$scope.navOpen = function() {
		// alert("heyOHHHH NAV");
		// angular.element('nav').addClass('.mobile_nav');

	};
	$scope.contentOpen = function() {
		// alert("heyOHHHH CONTENT");
	};

	// For angular-leaflet-directive
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
        	style: 97679, // added corresponding style in leaflet directive
        	key: 'BC9A493B41014CAABB98F0471D759707', // added corresponding key in leaflet directive
        	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="http://cloudmade.com">CloudMade</a>',

        }
    });

}]);

