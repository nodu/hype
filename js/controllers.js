'use strict';



/* Controllers */
app.controller("appController", [ "$scope", function($scope, $filter) {
	window.my_scope = $scope 
	// For ng-show/ng-hide
	$scope.truthy = true;
	


	// For accordion:
	$scope.oneAtATime = true;

	$scope.openItinerary = function(){
		$scope.itineraryOpen = true;
	};
	$scope.closeItinerary = function(){
		$scope.itineraryOpen = false;
	};
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
	$scope.districtSelect = {};

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


	// For showing/hiding the mobile version's containers/navs
	// MOVE TO DIRECTIVE!!!!!!!!!!!
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
	app.controller("getJSON_HTTP_Request", ['$scope', '$filter', 'barsDB', 'beachesDB', 'newDB','$timeout', 
		function($scope, $filter, barsDB, beachesDB, newDB, $timeout){
			window.my_scope2 = $scope
		// Get data from services
		barsDB.get(function(data){
			$scope.barsDB = data.data;
			// console.log($scope.featDB)
		}); 
		beachesDB.get(function(data){
			$scope.beachesDB = data.data;
			// console.log($scope.beachesDB)
		}); 
		newDB.get(function(data){
			$scope.newDB = data.data;
			$scope.changer = data.data;
			// console.log($scope.beachesDB)
		});          		

		// Enables using the scope from within the accordion directive
		// Changed the ng-model, filter, and savedJSON filter to opt.query 
		// for save fn
		$scope.opt = {};

		// Try to change the ng-repeat scope barsDB to newDB, etc.. based on corresponding nav header click
		// var changer = JSON.parse(JSON.stringify($scope.beachesDB));
		// $scope.changer = [{open: false}];
		// $scope.changer = JSON.parse($scope.test);


		// Adding this line below, makes length errors from filter:21 go away...
		$scope.changer = JSON.parse(JSON.stringify(newDB));

		// $scope.changer;
		// console.log($scope.changer)

		// var clone = 
		// $scope.onNavClick = function(dbName){
		// 	$scope.changer = JSON.parse(JSON.stringify(dbName));
		// 	console.log($scope.changer)
		// };

		$scope.$watch('opt.contentClickAddMarker', function(isOpen){
			// (feat)
			if(isOpen){
				console.log("This: ")
				feat.openPopup(map)

			}
		})


		$scope.$watch('opt.openBeaches', function(isOpen){
			if (isOpen) {
				console.log('Beach group was opened'); 
				$scope.changer = JSON.parse(JSON.stringify($scope.beachesDB));
				$scope.opt.query = [];


			}    
		});
		$scope.$watch('opt.openBars', function(isOpen){
			if (isOpen) {
				console.log('Bars group was opened'); 
				$scope.changer = JSON.parse(JSON.stringify($scope.barsDB));
				$scope.opt.query = [];


			}    
		});

		// $scope.opt.openBars = "true";
		// $scope.$apply();
		$scope.$watch('opt.openNew', function(isOpen){
			// isOpen = true;

			if (isOpen) {
				// console.log("THIS LINE: "+$scope.opt.openNew); 
				console.log('New group was opened'); 
				$scope.changer = JSON.parse(JSON.stringify($scope.newDB));
				$scope.opt.query = [];


			}    
			// return true
		});



		$scope.save = function(json) {
			// $scope.something = $filter('filter')(json, $scope.opt.so)
			// $scope.something2 = $filter('filter')($scope.something, $scope.opt.ea)
			// $scope.something3 = $filter('filter')($scope.something2, $scope.opt.we)
			// $scope.something4 = $filter('filter')($scope.something3, $scope.opt.wc)
			// $scope.something5 = $filter('filter')($scope.something4, $scope.opt.ce)
			// $scope.something6 = $filter('filter')($scope.something5, $scope.opt.di)
			// $scope.something7 = $filter('filter')($scope.something6, $scope.opt.sp)
			// $scope.something8 = $filter('filter')($scope.something7, $scope.opt.cl)
			// $scope.something9 = $filter('filter')($scope.something8, $scope.opt.pu)
			// $scope.distFilter = $filter('dis')($scope.something9)

			$scope.something = $filter('filter')(json, $scope.opt.so)
			console.log("southern "+$scope.something)
			$scope.something2 = $filter('filter')(json, $scope.opt.ea)
			console.log("eastern "+ $scope.something2)
			$scope.something3 = $filter('filter')(json, $scope.opt.we)
			$scope.something4 = $filter('filter')(json, $scope.opt.wc)
			$scope.something5 = $filter('filter')(json, $scope.opt.ce)


			$scope.totalList = json;
			$scope.totalList = [];
			if ($scope.something.length != json.length) {

				for (var i = 0; i < $scope.something.length; i++) {
					$scope.totalList.push($scope.something[i])
				};
				// $scope.totalList.push($scope.something[i])
			};
			// alert("Json's Length:  "+json.length)
			if ($scope.something2.length != json.length) {
				for (var i = 0; i < $scope.something2.length; i++) {
					$scope.totalList.push($scope.something2[i])
				};
			} 
			if ($scope.something3.length != json.length) {
				for (var i = 0; i < $scope.something3.length; i++) {
					$scope.totalList.push($scope.something3[i])};} 
			
			if ($scope.something4.length != json.length) {
				for (var i = 0; i < $scope.something4.length; i++) {
					$scope.totalList.push($scope.something4[i])};}

			if ($scope.something5.length != json.length) {
				for (var i = 0; i < $scope.something5.length; i++) {
					$scope.totalList.push($scope.something5[i])};}
			// else {alert("100 yo, that's all of em.  It would've added ALL bars.")}

			// for (var i = 0; i < $scope.something3.length; i++) {
			// 	$scope.totalList.push($scope.something3[i])
			// };
			// for (var i = 0; i < $scope.something4.length; i++) {
			// 	$scope.totalList.push($scope.something4[i])
			// };
			// for (var i = 0; i < $scope.something5.length; i++) {
			// 	$scope.totalList.push($scope.something5[i])
			// };
			$scope.finishedList = [];

			for (var i = 0; i < $scope.totalList.length; i++) {
				if ($scope.finishedList.indexOf($scope.totalList[i]) == -1) {

					$scope.finishedList.push($scope.totalList[i]);
				};
			};
			if (!$scope.finishedList.length) {
				$scope.finishedList = json
			};

			// console.log("finishedList: "+ $scope.finishedList)

			$scope.distFilter = $filter('dis')($scope.finishedList)
			// $scope.distFilter = $filter('dis')($scope.something5)

			// $scope.distFilter = $filter('distCheckbox')(json)
			// $scope.savedJSON = $filter('dis')(json)
			// console.log("DistFilter: "+$scope.distFilter)

			$scope.textFilter = $filter('filter')($scope.yeah, $scope.opt.query);



			$scope.textFilter = $filter('filter')($scope.distFilter, $scope.opt.query);
			$scope.savedJSON = $filter('selectedFeatureTags')($scope.textFilter);
			// $scope.savedJSON = $filter('filter')(json, $scope.opt.query);
			// ng-repeat="feat in featDB | selectedFeatureTags | filter:opt.query"
			var markerList = [];

			for (var obj in $scope.savedJSON){
				var marker = L.marker([$scope.savedJSON[obj].geometry.coordinates[1], 
					$scope.savedJSON[obj].geometry.coordinates[0]]);

				marker.bindPopup($scope.savedJSON[obj].properties.name)
				 // +"<br>"+
								 // $scope.savedJSON[obj].properties.category
				 // + '<button class="btn" onclick="my_scope2.addToIt(this, 2500)">Save to itinerary</button>'

				// .openPopup();
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

		// Alerts!
		$scope.alerts = [];
		$scope.addAlert = function(feat, timeout) {
			var alertSuc = {type: 'success', msg: 'Added '+ feat.properties.name + '!'};    
			$scope.alerts.push(alertSuc);
			
			if (timeout) {
				$timeout(function(){
					$scope.closeAlert($scope.alerts.indexOf(alert));
				}, timeout);
				// $timeout(function(){console.log("timedout!")}, 4000);
			}
		};

		$scope.removeIt = function(feat, timeout) {
			$scope.itinerary.splice($scope.itinerary.indexOf(feat), 1)
			var alertErr = {type: 'error', msg: 'Removed!'};    
			$scope.alerts.push(alertErr)
			if (timeout) {
				$timeout(function(){
					$scope.closeAlert($scope.alerts.indexOf(alert));
				}, timeout)}
			}

			$scope.closeAlert = function(index) {
				$scope.alerts.splice(index, 1);
			};

		// Itinerary Modal
		$scope.itinerary = [];
		$scope.addToIt = function(feat, timeout) {
			
			console.log(feat);
			$scope.addAlert(feat, timeout);
			if ($scope.itinerary.indexOf(feat) == -1) {
				$scope.itinerary.push(feat)		
			};
			console.log($scope.itinerary);
		}


		$scope.$watch("opt.query", function (value){

			console.log(value)
			$scope.save($scope.changer)
			// $scope.opt.query = [];

		}
		);

		$scope.$watch('opt.so', function (value){
			$scope.save($scope.changer)
		})
		$scope.$watch('opt.ea', function (value){
			$scope.save($scope.changer)
		})
		$scope.$watch('opt.we', function (value){
			$scope.save($scope.changer)
		})
		$scope.$watch('opt.ce', function (value){
			$scope.save($scope.changer)
		})
		$scope.$watch('opt.wc', function (value){
			$scope.save($scope.changer)
		})
		$scope.$watch('opt.di', function (value){
			$scope.save($scope.changer)
		})
		$scope.$watch('opt.cl', function (value){
			$scope.save($scope.changer)
		})
		$scope.$watch('opt.pu', function (value){
			$scope.save($scope.changer)
		})
		$scope.$watch('opt.sp', function (value){
			$scope.save($scope.changer)
		})

		// $scope.$watch("")

		// $scope.$watch("barsDB[1].checked", function (value){
		// 	// for (var i = 0; i < $scope.changer.length; i++) {
		// 	// 	if ($scope.changer[i]
		// 	// };
	 //    	// var checkedBar = $filter('filter')(value, {checked: true});


		// 	console.log("bar.checked " + value)
		// 	$scope.save($scope.changer)

		// }
		// 	);
		// $scope.save($scope.changer)

	}]);





