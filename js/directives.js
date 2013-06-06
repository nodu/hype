'use strict';

/* Directives */


angular.module('myApp.directives', [])
.directive('animate', function() {
	var linkFN;
	linkFN = function (scope, element, attrs){
		var animations = {
			down: function () {
				element.siblings(".nav").removeClass('mobile_nav');
				element.siblings(".sidebar").toggleClass('mobile_nav');

				// .animate({
				// 	left: '+=50'
				// });
			},
				up: function () {
				element.siblings("nav").toggleClass('mobile_nav');
				}
			
		};

		// element.on('click', animations[attrs.animate]);

	};
	return {
		replace: true,
		restrict: 'A',
		link: linkFN

	};
});

// app.directive('contentOpen', function(){
	
// });