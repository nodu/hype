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
		var content = angular.element(document.getElementsByClassName("content"));
		var nav = angular.element(document.getElementsByClassName("nav"));

		if (content.hasClass("mobile_nav")){
			content.removeClass('mobile_nav')
		};
		nav.toggleClass('mobile_nav');

	};
	$scope.contentOpen = function() {
		var content = angular.element(document.getElementsByClassName("content"));
		var nav = angular.element(document.getElementsByClassName("nav"));
		if (nav.hasClass("mobile_nav")){
			nav.removeClass('mobile_nav')
		};
		content.toggleClass('mobile_nav');

	};


	// For angular-leaflet-directive
	angular.extend($scope, {
		center: {
			lat: 22.25018,
			lng: 114.18571,
			zoom: 10
			// zoom: 13
		},
		defaults: {
			tileLayer: 'http://{s}.tile.cloudmade.com/{key}/{style}/256/{z}/{x}/{y}.png',
			// maxZoom: 16,
			maxZoom: 18,
			// minZoom: 11,
			minZoom: 8,
        	style: 97679, // added corresponding style in leaflet directive
        	key: 'BC9A493B41014CAABB98F0471D759707', // added corresponding key in leaflet directive
        	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="http://cloudmade.com">CloudMade</a>',

        }
    });

}]);



	// Should I separate this into a different controller?
	app.controller("getJSON_HTTP_Request", function($scope, $http, $filter){
		$http.get("data/newDB.js")
		.then(function(dataResponse) {
			$scope.featDB = dataResponse.data;
		});
		// Enables using the scope from within the accordion directive
		// Changed the ng-model, filter, and savedJSON filter to opt.query 
		$scope.opt = {};
		
		var markerLayer = L.layerGroup(); 
		// Need this global layer to be able to clear the layer before 
		//adding a new layer, removed dublicate markers
		// In future, need a way of checking if x in layer
		
		$scope.save = function() {
			$scope.savedJSON = $filter('filter')($scope.featDB, $scope.opt.query);
			var markerList = [];

			for (var obj in $scope.savedJSON){
				var marker = L.marker([$scope.savedJSON[obj].geometry.coordinates[1], 
					$scope.savedJSON[obj].geometry.coordinates[0]])
				.bindPopup($scope.savedJSON[obj].properties.name)
				.openPopup();
				// Add other wanted properties here, popups, mouseover effects...
				markerList.push(marker);
			console.log(marker);
		};
		markerLayer.clearLayers();
		markerLayer = L.layerGroup(markerList)

		markerLayer.addTo(map);
	};

	$scope.clear = function() {
		markerLayer.clearLayers()
				//declare markerLayer as a global varible and this will work
			};
		});





