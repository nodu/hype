'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['myApp.services', 'myApp.directives', 'leaflet-directive', 'ui.bootstrap']);




// L.Control.Zoom(position 'bottomleft')


// L.Control.Zoom = L.Control.extend({
// 	options: {
// 		position: 'bottomleft'
// 	}});


var layerControl = L.control.zoom({position: 'bottomleft'});