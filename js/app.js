'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['myApp.services', 'myApp.directives', 'leaflet-directive', 'ui.bootstrap']);



// L.Control.Zoom(position 'bottomleft')


// L.Control.Zoom = L.Control.extend({
// 	options: {
// 		position: 'bottomleft'
// 	}});
// var myZoomClass = L.Control.Zoom.extend({

// options: {
	// position: 'bottomleft'
// }
  // });

// var layerControl = L.control.zoom({position: 'bottomleft'});
// L.Control.Zoom.position = 'bottomleft';

// var myZoomClass = L.Control.extend({
// 	options: {
// 		position: 'bottomleft'
// 	},

// 	onAdd: function (map) {
// 		var zoomName = 'leaflet-control-zoom',
// 		    barName = 'leaflet-bar',
// 		    partName = barName + '-part',
// 		    container = L.DomUtil.create('div', zoomName + ' ' + barName);

// 		this._map = map;

// 		this._zoomInButton = this._createButton('+', 'Zoom in',
// 		        zoomName + '-in ' +
// 		        partName + ' ' +
// 		        partName + '-top',
// 		        container, this._zoomIn,  this);

// 		this._zoomOutButton = this._createButton('-', 'Zoom out',
// 		        zoomName + '-out ' +
// 		        partName + ' ' +
// 		        partName + '-bottom',
// 		        container, this._zoomOut, this);

// 		map.on('zoomend', this._updateDisabled, this);

// 		return container;
// 	},
// 	_createButton: function (html, title, className, container, fn, context) {
// 		var link = L.DomUtil.create('a', className, container);
// 		link.innerHTML = html;
// 		link.href = '#';
// 		link.title = title;

// 		var stop = L.DomEvent.stopPropagation;

// 		L.DomEvent
// 		    .on(link, 'click', stop)
// 		    .on(link, 'mousedown', stop)
// 		    .on(link, 'dblclick', stop)
// 		    .on(link, 'click', L.DomEvent.preventDefault)
// 		    .on(link, 'click', fn, context);

// 		return link;
// 	}
// });

// var myZoom = new myZoomClass();
// myZoom.addTo($scope.map)