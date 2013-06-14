'use strict';



/* Controllers */
app.controller("appController", [ "$scope", function($scope, $filter) {
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

	// Select // Submit
	$scope.districts = ["Central", "Wan Chai", "Eastern", "Western", "Southern"];
	$scope.districtSelect = "";
	$scope.di = {};
	// $scope.disco = 'disco';


	// Checkboxes
	// $scope.barsDB = [ {name: 'Marxcos', tag: 'New York'},{name: 'Martijn', tag: 'Miami'} ];
	$scope.search = {};
	$scope.searchBy = function () {
		return function (obj) {
			if ( $scope.search[obj.tags] === true ) {
				console.log(obj.properties.tags);
      	// console.log("this is the search object: "+$scope.search[0]);
      	return true;
      }
  }
};
$scope.club = function() {
		// Need a function/varible to be set here that allows for 
		// filtering of savedJSON to be displayed in contentContainer
		// and to be added on map...
	};
	$scope.pub = function() {
		// Need a function/varible to be set here that allows for 
		// filtering of savedJSON to be displayed in contentContainer
		// and to be added on map...
	};
	// $scope.disco = function() {
		// Need a function/varible to be set here that allows for 
		// filtering of savedJSON to be displayed in contentContainer
		// and to be added on map...
	// };
	$scope.sports = "";
	// $scope.savedJSON = $filter('filter')($scope.featDB, $scope.sports);
	// $scope.submitJSON = $filter('filter')($scope.featDB, function(){
	// 			for (var i = 0; i < $scope.featDB.length; i++) {
	// 				if ($scope.featDB[i].properties.tags.match($scope.sports)){}
	// 				}
	// 		});

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
	app.controller("getJSON_HTTP_Request", ['$scope', '$filter', 'barsDB', 'beachesDB', 
		function($scope, $filter, barsDB, beachesDB){
		// Get data from services
		barsDB.get(function(data){
			$scope.barsDB = data.data;
			// console.log($scope.featDB)
		}); 
		beachesDB.get(function(data){
			$scope.beachesDB = data.data;
			// console.log($scope.beachesDB)
		});          		

		// Try to change the ng-repeat for content based on nav header click
		// var changer = JSON.parse(JSON.stringify($scope.beachesDB));
		$scope.changer = [{open: false}];
		// var clone = 
		$scope.onNavClick = function(dbName){
			$scope.changer = JSON.parse(JSON.stringify(dbName));
			console.log($scope.changer)
		};
		$scope.$watch('opt.open.beaches', function(isOpen){
    		if (isOpen) {
      			console.log('First group was opened'); 
			$scope.changer = JSON.parse(JSON.stringify($scope.beachesDB));

    		}    
  		});
  		$scope.$watch('opt.open.bars', function(isOpen){
    		if (isOpen) {
      			console.log('First group was opened'); 
			$scope.changer = JSON.parse(JSON.stringify($scope.barsDB));

    		}    
  		});


		// Enables using the scope from within the accordion directive
		// Changed the ng-model, filter, and savedJSON filter to opt.query 
		$scope.opt = {};
		
		
		$scope.save = function(json) {
			// $scope.savedJSON = $filter('filter')(json, $scope.opt.query);
			$scope.textFilter = $filter('filter')(json, $scope.opt.query);
			$scope.savedJSON = $filter('selectedFeatureTags')($scope.textFilter);
			// ng-repeat="feat in featDB | selectedFeatureTags | filter:opt.query"
			var markerList = [];

			for (var obj in $scope.savedJSON){
				var marker = L.marker([$scope.savedJSON[obj].geometry.coordinates[1], 
				$scope.savedJSON[obj].geometry.coordinates[0]])
				.bindPopup($scope.savedJSON[obj].properties.name, 
					$scope.savedJSON[obj].properties.category)
				.openPopup();
				// Add other wanted properties here, popups, mouseover effects...
				markerList.push(marker);
				console.log(marker);
			};
			markerLayer.clearLayers();
			markerLayer = L.layerGroup(markerList)

			markerLayer.addTo(map);
		};
		
		var markerLayer = L.layerGroup(); 
		// Need this global layer to be able to clear the layer before 
		//adding a new layer, removed dublicate markers
		// In future, need a way of checking if x in layer

		$scope.clear = function() {
			markerLayer.clearLayers()
				//declare markerLayer as a global varible and this will work
		};
		$scope.builtList = [];
		$scope.submit = function (object){
			$scope.builtList = [];
			// $scope.clear();
			// markerLayer.clearLayers();

			if ($scope.di.disco == 'disco') {
			// console.log($scope.featDB[0].properties.tags.length);
			// console.log("disco is hot! " + "Sports: "+$scope.di.sports);
				for (var i = 0; i < $scope.featDB.length; i++) {
					for (var t = 0; t < $scope.featDB[i].properties.tags.length; t++) {
						console.log($scope.featDB[i].properties.tags[t])
						if ($scope.featDB[i].properties.tags[t] == 'disco') {
							$scope.builtList.push($scope.featDB[i])
						};
					};

				};
			} else{console.log("it's false "+"Sports: "+$scope.di.sports)};
			$scope.save(object);


		};		

}]);





