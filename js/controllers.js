'use strict';



/* Controllers */
app.controller("appController", ['$scope', '$filter', '$timeout', 'barsDB', 'beachesDB', 'newDB', 
	function($scope, $filter, $timeout, barsDB, beachesDB, newDB){


		window.myscope = $scope 
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
		// $scope.changer = JSON.parse(JSON.stringify(newDB));
		$scope.changer = JSON.parse(JSON.stringify(newDB));



		// $scope.changer;
		// console.log($scope.changer)

		// var clone = 
		// $scope.onNavClick = function(dbName){
		// 	$scope.changer = JSON.parse(JSON.stringify(dbName));
		// 	console.log($scope.changer)
		// };

		// $scope.$watch('opt.contentClickAddMarker', function(isOpen){
		// 	// (feat)
		// 	if(isOpen){
		// 		console.log("This: ")
		// 		// feat.openPopup(map)

		// 	}
		// });
$scope.$watch('opt.contentClickAddMarker', function(isOpen){
	if (isOpen) {
		console.log('Accordion heading was opened'); 
				// $scope.changer = JSON.parse(JSON.stringify($scope.beachesDB));
				// $scope.opt.query = [];


			}    
		});


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
				// $scope.changer = JSON.parse(JSON.stringify($scope.scope));
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


		// markerList[2].bindPopup('derp').openPopup()  //works from
		// $scope.markerList = [];
		$scope.save = function(json, type) {
			$scope.tagFilter = $filter('filter')(json, $scope.opt.di)
			$scope.tagFilter2 = $filter('filter')(json, $scope.opt.sp)
			$scope.tagFilter3 = $filter('filter')(json, $scope.opt.cl)
			$scope.tagFilter4 = $filter('filter')(json, $scope.opt.pu)
			$scope.totalTagList = [];
			if ($scope.tagFilter.length != json.length) {
				for (var i = 0; i < $scope.tagFilter.length; i++) {
					$scope.totalTagList.push($scope.tagFilter[i])
				};
			};
			if ($scope.tagFilter2.length != json.length) {
				for (var i = 0; i < $scope.tagFilter2.length; i++) {
					$scope.totalTagList.push($scope.tagFilter2[i])
				};
			};
			if ($scope.tagFilter3.length != json.length) {
				for (var i = 0; i < $scope.tagFilter3.length; i++) {
					$scope.totalTagList.push($scope.tagFilter3[i])
				};
			};
			if ($scope.tagFilter4.length != json.length) {
				for (var i = 0; i < $scope.tagFilter4.length; i++) {
					$scope.totalTagList.push($scope.tagFilter4[i])
				};
			};
			$scope.finishedTagList = [];
			for (var i = 0; i < $scope.totalTagList.length; i++) {
				if ($scope.finishedTagList.indexOf($scope.totalTagList[i]) == -1) {
					$scope.finishedTagList.push($scope.totalTagList[i]);
				};
			};
			if (!$scope.finishedTagList.length) {
				$scope.finishedTagList = json
			};




			$scope.districtFilter = $filter('filter')(json, $scope.opt.so)
			$scope.districtFilter2 = $filter('filter')(json, $scope.opt.ea)
			$scope.districtFilter3 = $filter('filter')(json, $scope.opt.we)
			$scope.districtFilter4 = $filter('filter')(json, $scope.opt.wc)
			$scope.districtFilter5 = $filter('filter')(json, $scope.opt.ce)
			$scope.districtFilter6 = $filter('filter')(json, $scope.opt.sk)
			$scope.districtFilter7 = $filter('filter')(json, $scope.opt.tw)
			$scope.districtFilter8 = $filter('filter')(json, $scope.opt.tm)
			$scope.districtFilter9 = $filter('filter')(json, $scope.opt.is)
			// console.log("southern "+$scope.something)
			// console.log("eastern "+ $scope.something2)


			$scope.totalList = [];
			if ($scope.districtFilter.length != json.length) {
				for (var i = 0; i < $scope.districtFilter.length; i++) {
					$scope.totalList.push($scope.districtFilter[i])
				};
			};
			// alert("Json's Length:  "+json.length)
			if ($scope.districtFilter2.length != json.length) {
				for (var i = 0; i < $scope.districtFilter2.length; i++) {
					$scope.totalList.push($scope.districtFilter2[i])
				};
			} 
			if ($scope.districtFilter3.length != json.length) {
				for (var i = 0; i < $scope.districtFilter3.length; i++) {
					$scope.totalList.push($scope.districtFilter3[i])};} 

					if ($scope.districtFilter4.length != json.length) {
						for (var i = 0; i < $scope.districtFilter4.length; i++) {
							$scope.totalList.push($scope.districtFilter4[i])};}

							if ($scope.districtFilter5.length != json.length) {
								for (var i = 0; i < $scope.districtFilter5.length; i++) {
									$scope.totalList.push($scope.districtFilter5[i])};}

									if ($scope.districtFilter6.length != json.length) {
										for (var i = 0; i < $scope.districtFilter6.length; i++) {
											$scope.totalList.push($scope.districtFilter6[i])};}

											if ($scope.districtFilter7.length != json.length) {
												for (var i = 0; i < $scope.districtFilter7.length; i++) {
													$scope.totalList.push($scope.districtFilter7[i])};}

													if ($scope.districtFilter8.length != json.length) {
														for (var i = 0; i < $scope.districtFilter8.length; i++) {
															$scope.totalList.push($scope.districtFilter8[i])};}

															if ($scope.districtFilter9.length != json.length) {
																for (var i = 0; i < $scope.districtFilter9.length; i++) {
																	$scope.totalList.push($scope.districtFilter9[i])};}

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
			//Could probably use angular.equals($scope.finishedTagList[j], $scope.finishedList[i])
			$scope.newList = [];
			for (var i = 0; i < $scope.finishedList.length; i++) {
				for (var j = 0; j < $scope.finishedTagList.length; j++) {
					if ($scope.finishedTagList[j]==$scope.finishedList[i]) {
					// if (angular.equals($scope.finishedTagList[j], $scope.finishedList[i])) {
						$scope.newList.push($scope.finishedTagList[j])
					};
				};
				
			};


			// $scope.distFilter = $filter('dis')($scope.finishedTagList)
			// $scope.distFilter = $filter('dis')($scope.something5)
			// $scope.distFilter = $filter('distCheckbox')(json)
			// $scope.savedJSON = $filter('dis')(json)
			// console.log("DistFilter: "+$scope.distFilter)
			// $scope.textFilter = $filter('filter')($scope.yeah, $scope.opt.query);



			//These are the working filters:
			// $scope.distFilter = $filter('dis')($scope.newList)
			// $scope.textFilter = $filter('filter')($scope.distFilter, $scope.opt.query);
			// $scope.savedJSON = $filter('selectedFeatureTags')($scope.textFilter);

			if (type == 1) {
				$scope.resetDistricts();
				$scope.resetTags();
				$scope.newList = json;

			};

			//This is the experiment:
			$scope.distFilter = $filter('selectedFeatureDistrict')($scope.newList)
			$scope.savedJSON = $filter('filter')($scope.distFilter, $scope.opt.query);



			// $scope.savedJSON = $filter('filter')(json, $scope.opt.query);
			// ng-repeat="feat in featDB | selectedFeatureTags | filter:opt.query"
			$scope.markerList = [];
			for (var obj in $scope.savedJSON){
				var marker = L.marker([$scope.savedJSON[obj].geometry.coordinates[1], 
					$scope.savedJSON[obj].geometry.coordinates[0]]);

				marker.bindPopup($scope.savedJSON[obj].properties.name)
				 // +"<br>"+
								 // $scope.savedJSON[obj].properties.category
				 // + '<button class="btn" onclick="my_scope2.addToIt(this, 2500)">Save to itinerary</button>'

				// .openPopup();
				// Add other wanted properties here, popups, mouseover effects...
				$scope.markerList.push(marker);
				console.log(marker);
			};
			$scope.idList= [];

			// var geojson = L.geoJson($scope.markerList)
			// console.log($scope.markerList[0]._leaflet_id)
			// for (var i = 0; i < $scope.markerList.length; i++) {
				// console.log(geojson[i]._leaflet_id)
				// $scope.idList.push($scope.markerList[i]._leaflet_id)
			// };
			// console.log($scope.idList)

			markerLayer.clearLayers();
			markerLayer = L.layerGroup($scope.markerList)

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

		// rewrite using $watchCollection to cut down on code
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
		$scope.$watch('opt.sk', function (value){
			$scope.save($scope.changer)
		})
		$scope.$watch('opt.tw', function (value){
			$scope.save($scope.changer)
		})
		$scope.$watch('opt.tm', function (value){
			$scope.save($scope.changer)
		})
		$scope.$watch('opt.is', function (value){
			$scope.save($scope.changer)
		})
		$scope.resetDistricts = function(){
			$scope.opt.so = "";
			$scope.opt.ea = "";
			$scope.opt.we = "";
			$scope.opt.ce = "";
			$scope.opt.wc = "";
			$scope.opt.sk = "";
			$scope.opt.tw = "";
			$scope.opt.tm = "";
			$scope.opt.is = "";
		}
		$scope.resetTags = function(){
			$scope.opt.di = "";
			$scope.opt.sp = "";
			$scope.opt.cl = "";
			$scope.opt.pu = "";
		}
		// $scope.save($scope.changer)

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

// at the bottom of your controller
// var init = function () {
   // check if there is query in url
   // and fire search in case its value is not empty
	// $scope.save($scope.changer)

// };
// init()
// and fire it after definition
// $scope.$on('$viewContentLoaded', function() {
//     //call it here
//     console.log("this")
// 	$scope.save($scope.changer)

// });
// angular.element(document).ready(function () {
	// myscope.save(myscope.changer);
	// $scope.save($scope.changer)

// });


}])
// .run(['$rootScope',function($rootScope) {
  // Do post-load initialization stuff here
	// $scope.save($scope.changer)
	// myscope.save(myscope.changer);

// }]);



