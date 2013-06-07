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
	events, restaurants, cinemas/movies on, bars, 
Marker on click add class to content div to show in mobile
	add marker's content to new tab

Add the filters for the different data types