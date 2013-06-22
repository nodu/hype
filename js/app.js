'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['ui.unique', 'myApp.filters', 'myApp.services', 'myApp.directives', 'leaflet-directive', 'ui.bootstrap']);


/*!	
* FitText.js 1.0 jQuery free version
*
* Copyright 2011, Dave Rupert http://daverupert.com 
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
* Modified by Slawomir Kolodziej http://slawekk.info
*
* Date: Tue Aug 09 2011 10:45:54 GMT+0200 (CEST)
*/
(function(){
  var css = function (el, prop) {
    return window.getComputedStyle ? getComputedStyle(el).getPropertyValue(prop) : el.currentStyle[prop];
  };
  
  var addEvent = function (el, type, fn) {
    if (el.addEventListener)
      el.addEventListener(type, fn, false);
		else
			el.attachEvent('on'+type, fn);
  };

  window.fitText = function (el, kompressor) {

    var settings = {
      'minFontSize' : -1/0,
      'maxFontSize' : 1/0
    };

    var fit = function (el) {
      var compressor = kompressor || 1;

      var resizer = function () {
        el.style.fontSize = Math.max(Math.min(el.clientWidth / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)) + 'px';
      };

      // Call once to set.
      resizer();

      // Bind events
      // If you have any js library which support Events, replace this part
      // and remove addEvent function (or use original jQuery version)
      addEvent(window, 'resize', resizer);
    };

    if (el.length)
      for(var i=0; i<el.length; i++)
        fit(el[i]);
    else
      fit(el);

    // return set of elements
    return el;
  };
})();

 fitText(document.getElementsByClassName('fittext'), 1.2)

 
 // fitText(document.getElementById('fittext'), 1.2)

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