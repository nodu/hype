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


$scope.truthy = false; // In controller
<div class="showme" ng-hide="truthy">
angular.element($0).scope().truthy = false;
angular.element($0).scope().$apply()


For Now, changed L.Control.Zoom to 'bottomleft' in leaflet.src
Need to find a way to include that in my code...


JS, if max width lt 625, add button class "mini" to buttons