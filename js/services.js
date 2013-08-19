'use strict';

/* Services */

angular.module('myApp.services', [])
.factory('barsDB', ['$http', function($http){
	return{
		get: function(callback){
			$http.get("data/barsDB.js").then(function(dataResponse) {
          		callback(dataResponse);
      });
		}
	};
}])
.factory('newDB', ['$http', function($http){
	return{
		get: function(callback){
			$http.get("data/newDB.js").then(function(dataResponse) {
          		callback(dataResponse);
      });
		}
	};
}])
.factory('beachesDB', ['$http', function($http){
	return{
		get: function(callback){
			$http.get("data/beachesDB.js").then(function(dataResponse) {
          		callback(dataResponse);
      });
		}
	};
}])