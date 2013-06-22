'use strict';

/* Directives */


angular.module('myApp.directives', [])
.directive('openPop', function(){
	return function($scope, element, attrs){
		element.bind('click', function(){
			console.log(attrs)
			console.log($scope.markerList[0])
			$scope.markerList[0].openPopup();

			console.log("savedJson: ", $scope.savedJSON)
			// console.log(attrs.id)
			// var x;
			// attrs.$observe('attrs.openPop', function(value) {
			// 	console.log('openPop has changed value to ' + value);
			// 	value.openPopup();
			// 	// x = value;
				
			// })
			// console.log("This: ", x)

			// L.marker(attrs.openPopup.geometry.coordinates[1], attrs.openPopup.geometry.coordinates[0]).openPopup();

			
			// element.find('div').attr('open-pop')
			// var id = 
		// my_scope2.markerList[].openPopup()

		})

	}
})
.directive('changeIcon', function(){
	var linkFN;
	linkFN = function(scope, element, attrs){
		element.bind('click', function(){
			console.log(this)
			console.log('derp')
		})
	// element.children().toggleClass('icon-chevron-down');
	// element.children().toggleClass('icon-chevron-up')
	}
	return {
		replace: true,
		restrict: 'A',
		link: linkFN
	}
	
})
.directive('changeIcons', function(){
	return function (scope, element, attrs){
	// console.log("'you've hit it!")
	scope.do = function(){
		// alert("derp!")
		element.find('i').toggleClass('icon-chevron-down');
		element.find('i').toggleClass('icon-chevron-up')
	};

	element.bind("click", scope.do)
		// document.getElementsByClassName("derp").toggleClass('icon-chevron-down')

	}
})
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
})
.directive('facebook', function($http) {
	return {
		restrict: 'A',
		scope: true,
		controller: function($scope, $attrs) {
      // Load the SDK Asynchronously
      (function(d){
      	var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
      	if (d.getElementById(id)) {return;}
      	js = d.createElement('script'); js.id = id; js.async = true;
      	js.src = "//connect.facebook.net/en_US/all.js";
      	ref.parentNode.insertBefore(js, ref);
      }(document));

      function login() {
      	FB.login(function(response) {
      		if (response.authResponse) {
      			console.log('FB.login connected');
      			fetch();
      		} else {
      			console.log('FB.login cancelled');
      		}
      	}, { scope: 'email,user_birthday' }
      	);
      };

      function fetch() {
      	$http.post('/facebook/fetch', $scope.auth
      		).success(function(data) {
      			window.location.reload(true);
      			$scope.fetch_status = data.status;
      		}).error(function(data) {
      			console.log('error: '+data);
      			$scope.fetch_status = data.status;
      		});
      	}

      	$scope.fetch = function() {
      		if ($scope.login_status == 'connected') {
      			console.log('fetch');
      			fetch();
      		} else {
      			login();
      		}
      	};
      },
      link: function(scope, element, attrs, controller) {
      // Additional JS functions here
      window.fbAsyncInit = function() {
      	FB.init({
          appId      : 569961439716564, // App ID
          channelUrl : '//localhost:3000/channel.html', // Channel File
          status     : true, // check login status
          cookie     : true, // enable cookies to allow the server to access the session
          xfbml      : true  // parse XFBML
      });

        // Additional init code here
        FB.getLoginStatus(function(response) {
        	if (response.status === 'connected') {
            // connected
            scope.auth = response.authResponse;
        } else if (response.status === 'not_authorized') {
            // not_authorized
        } else {
            // not_logged_in
        }
        scope.login_status = response.status;
        scope.$apply();
    });
      }; // end of fbAsyncInit
  }
}
});
;