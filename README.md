NOTES

// Put this in a controller for access to the scope in console
window.my_scope = $scope 

my_scope.center.zoom = 10;

angular.element(myDomElement).scope().$apply();
// click on an element in Elemnts to set it to $0

//This doesn't need line 2 to be added to the controller
angular.element($0).scope().center.zoom = 5;
angular.element($0).scope().$apply();


Maybe think about using reuseTiles for leaflet...



// this hides the attribution box
angular.element(document.querySelector('.leaflet-control-attribution')).addClass('displayNone')
//or this
angular.element(document.querySelector('.leaflet-control-attribution')).css('display', 'none')

// This brings it back
angular.element(document.querySelector('.leaflet-control-attribution')).removeClass('displayNone')



<div class="showme" ng-hide="truthy">
    <p>This is shown!</p>
  </div>
  
$scope.truthy = false; // In controller
<div class="showme" ng-hide="truthy">
angular.element($0).scope().truthy = false;
angular.element($0).scope().$apply()


For Now, changed L.Control.Zoom to 'bottomleft' in leaflet.src
Need to find a way to include that in my code...


JS, if max width lt 625, add button class "mini" to buttons


TO DO
Make geojson data with lat/long, name, id, content, address, 
	page load "what's hot" list, to be cleared on checkbox submit
	events, restaurants, movies on, bars, 
Marker on click add class to content div to show in mobile
	add marker's content to new tab

Add the filters for the different data types


Check unnecessary ng-cloak direcives on deployment!

ssh-key test FAILED, need to add the normal ssh keys to github












OLD CODE - Depricated
		// $scope.builtList = [];
		// $scope.submit = function (object){
		// 	$scope.builtList = [];
		// 	// $scope.clear();
		// 	// markerLayer.clearLayers();

		// 	if ($scope.di.disco == 'disco') {
		// 	// console.log($scope.featDB[0].properties.tags.length);
		// 	// console.log("disco is hot! " + "Sports: "+$scope.di.sports);
		// 		for (var i = 0; i < $scope.featDB.length; i++) {
		// 			for (var t = 0; t < $scope.featDB[i].properties.tags.length; t++) {
		// 				console.log($scope.featDB[i].properties.tags[t])
		// 				if ($scope.featDB[i].properties.tags[t] == 'disco') {
		// 					$scope.builtList.push($scope.featDB[i])
		// 				};
		// 			};

		// 		};
		// 	} else{console.log("it's false "+"Sports: "+$scope.di.sports)};
		// 	$scope.save(object);


		// };		



filtering by ngmodel="districtSelect" doesn't work....



* Open marker on header click
* Add watch function for search box, so + button is irrelevant
* fix left side whitespace, why is this happening?
* fix filtering by Select 
* sharebar!
* switch css to smacss
* persistent data from FB by saving the user's fb ID in a userDB, if user in DB BAM, else create 	user
* Make credits bigger (add to nav?)
* Increase mobile screen res check?
* long screens are going to make the contentContainer look ugly, narrow and stretched
* map zoom lvl on mobile?
* auto map markers on accordion click
* add watch for checkboxes
* Change class to icon-chevron-up on click "angular on click change class"

Issues
* Alert's don't stack vertically and seem to pause the timeout of the previous alert.
* Something overwrites the checked state of district accordion when clicking another accordion!
* * connecting a checkbox in another accordion with another Make new ...
* Current filtration is not dynamic with ng-repeat, doesn't  utilize | unique: property.district and does not offer multiple filters in each category, ie, (wan chai + western) results in 0 results.  western + (disco + sports)=0results
* If keeping dumb filtration with ng-true-value, then ng-true-values will need to be super unique to avoid filtering other text


* Find a way to add is-open attributes on accordion headers inside ng-repeat, that way I can add click to open popup
* And I would also be able to add change-icon directive.  I beilieve this will be accomplished with something like cElement for directives...
* Add compile attributes for each ng-repeat
* So adding a attribute directive to a repeated accordion header is quite hard... can't solve


* change of content div's repeater from changer to savedJSON breaks the map it! function, also this new implementation doesn't work with beaches...


Changed content div input to changer, change district/bar isOpen to savedJson, add correct beach district filter to content div filter

Add toggleClass icon chevron down/up to isOpen, so when user clicks another div it resets up chevron down

Hmmmm something seems fishy, but changed div content repeater back to savedJSON (from changer) and now div content filtering works...