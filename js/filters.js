'use strict';

/* Filters */

angular.module('myApp.filters', [])
// .filter('distTagFilter', function($filter){
// 	return function(feature, $scope){
// 		var scope;
		
// 		scope.tagFilter = $filter('filter')(feature, $scope.opt.di)
// 			scope.tagFilter2 = $filter('filter')(feature, $scope.opt.sp)
// 			scope.tagFilter3 = $filter('filter')(feature, $scope.opt.cl)
// 			scope.tagFilter4 = $filter('filter')(feature, $scope.opt.pu)
// 			scope.totalTagList = [];
// 			if (scope.tagFilter.length != feature.length) {
// 				for (var i = 0; i < scope.tagFilter.length; i++) {
// 					scope.totalTagList.push(scope.tagFilter[i])
// 				};
// 			};
// 			if (scope.tagFilter2.length != feature.length) {
// 				for (var i = 0; i < scope.tagFilter2.length; i++) {
// 					scope.totalTagList.push(scope.tagFilter2[i])
// 				};
// 			};
// 			if (scope.tagFilter3.length != feature.length) {
// 				for (var i = 0; i < scope.tagFilter3.length; i++) {
// 					scope.totalTagList.push(scope.tagFilter3[i])
// 				};
// 			};
// 			if (scope.tagFilter4.length != feature.length) {
// 				for (var i = 0; i < scope.tagFilter4.length; i++) {
// 					scope.totalTagList.push(scope.tagFilter4[i])
// 				};
// 			};
// 			scope.finishedTagList = [];
// 			for (var i = 0; i < scope.totalTagList.length; i++) {
// 				if (scope.finishedTagList.indexOf(scope.totalTagList[i]) == -1) {
// 					scope.finishedTagList.push(scope.totalTagList[i]);
// 				};
// 			};
// 			if (!scope.finishedTagList.length) {
// 				scope.finishedTagList = feature
// 			};




// 			scope.districtFilter = $filter('filter')(feature, $scope.opt.so)
// 			scope.districtFilter2 = $filter('filter')(feature, $scope.opt.ea)
// 			scope.districtFilter3 = $filter('filter')(feature, $scope.opt.we)
// 			scope.districtFilter4 = $filter('filter')(feature, $scope.opt.wc)
// 			scope.districtFilter5 = $filter('filter')(feature, $scope.opt.ce)
// 			// console.log("southern "+$scope.something)
// 			// console.log("eastern "+ $scope.something2)


// 			scope.totalList = [];
// 			if (scope.districtFilter.length != feature.length) {
// 				for (var i = 0; i < scope.districtFilter.length; i++) {
// 					scope.totalList.push(scope.districtFilter[i])
// 				};
// 			};
// 			// alert("Json's Length:  "+json.length)
// 			if (scope.districtFilter2.length != feature.length) {
// 				for (var i = 0; i < scope.districtFilter2.length; i++) {
// 					scope.totalList.push(scope.districtFilter2[i])
// 				};
// 			} 
// 			if (scope.districtFilter3.length != feature.length) {
// 				for (var i = 0; i < scope.districtFilter3.length; i++) {
// 					scope.totalList.push(scope.districtFilter3[i])};} 
			
// 			if (scope.districtFilter4.length != feature.length) {
// 				for (var i = 0; i < scope.districtFilter4.length; i++) {
// 					scope.totalList.push(scope.districtFilter4[i])};}

// 			if (scope.districtFilter5.length != feature.length) {
// 				for (var i = 0; i < scope.districtFilter5.length; i++) {
// 					scope.totalList.push(scope.districtFilter5[i])};}
	
// 			scope.finishedList = [];

// 			for (var i = 0; i < scope.totalList.length; i++) {
// 				if (scope.finishedList.indexOf(scope.totalList[i]) == -1) {
// 					scope.finishedList.push(scope.totalList[i]);
// 				};
// 			};
// 			if (!scope.finishedList.length) {
// 				scope.finishedList = feature
// 			};

// 			// console.log("finishedList: "+ $scope.finishedList)
// 			scope.newList = [];
// 			for (var i = 0; i < scope.finishedList.length; i++) {
// 				for (var j = 0; j < scope.finishedTagList.length; j++) {
// 					if (scope.finishedTagList[j]==scope.finishedList[i]) {
// 						scope.newList.push(scope.finishedTagList[j])
// 					};
// 				};
				
// 			};
// 			return newList;
// 	}
// })
// .filter('distCheckbox', function($filter){
// 	return function(array){
// 		var southern = $filter('filter')(array, {properties: {district : 'southern'}})
		// var eastern = $filter('filter')(feature, 'eastern')
		// var western = $filter('filter')(feature, 'western')
		// var wanchai = $filter('filter')(feature, 'wan chai')
		// var central = $filter('filter')(feature, 'central')

		// for (var i = 0; i < southern.length; i++) {
			// console.log(southern[i])
		// };

		// var retArray = [];
		// var checkedDist;
  // if(checkedDist.length === 0) {
	    	// return feature;
	    // }
		// return retArray;
// 	}
// })

.filter('selectedFeatureTags', function($filter) {
	return function(feature) {
		var len;

	    // get customers that have been checked
	    var checkedDist = $filter('filter')(feature, {checked: true});
	    // var checkedDist = ["pie", "doh" ]

	    // for (var i = 0; i < checkedDist.length; i++) {
	    // 	console.log("checked: " + checkedDist[i]);
	    // 	console.log(checkedDist.length)
	    // };
	    
	    // Add in a check to see if any customers were selected. If none, return 
	    // them all without filters
	    if(checkedDist.length === 0) {
	    	return feature;
	    }
	    
	    // get all the unique cities that come from these checked customers
	    var tagList = {};
	    for(var i = 0, len = checkedDist.length; i < len; ++i) {
	      // if this checked customers cities isn't already in the cities object 
	      // add it
	      if(!tagList.hasOwnProperty(checkedDist[i].properties.tags[1])) {
	      	tagList[checkedDist[i].properties.tags[1]] = true;
	      }
	      console.log(tagList)

	  }
	    var ret = [];
	    for(var i = 0, len = feature.length;  i < len; ++i) {
	      if(tagList[feature[i].properties.tags[1]]) {
	      	ret.push(feature[i]);
	      } 
	  }
	    return ret;
	};
})
.filter('dis', function($filter) {
	return function(feature) {
		var len;

	    // get customers that have been checked
	    var checkedDist = $filter('filter')(feature, {dist: "dist"});
	    console.log(checkedDist)

	    
	    // Add in a check to see if any customers were selected. If none, return 
	    // them all without filters
	    if(checkedDist.length === 0) {
	    	return feature;
	    }
	    
	    // get all the unique cities that come from these checked customers
	    var tagList = {};
	    for(var i = 0, len = checkedDist.length; i < len; ++i) {
	  //     // if this checked customers cities isn't already in the cities object 
	  //     // add it
	      if(!tagList.hasOwnProperty(checkedDist[i].properties.district)) {
	      	tagList[checkedDist[i].properties.district] = true;
	      }
	      console.log(tagList)

	  }

	    // Now that we have the cities that come from the checked customers, we can
	    //get all customers from those cities and return them
	    var ret = [];
	    for(var i = 0, len = feature.length;  i < len; ++i) {
	      // If this customer's city exists in the cities object, add it to the 
	      // return array
	      if(tagList[feature[i].properties.district]) {
	      	ret.push(feature[i]);
	      } 
	  }

	    // we have our result!
	    console.log(ret)
	    return ret;
	};
})
.filter('selectedFeatureDistrict', function($filter) {
	return function(feature) {
		var len;

	    // get customers that have been checked
	    var checkedDist = $filter('filter')(feature, {checked: true});
	    // var checkedDist = ["pie", "doh" ]

	    // for (var i = 0; i < checkedDist.length; i++) {
	    // 	console.log("checked: " + checkedDist[i]);
	    // 	console.log(checkedDist.length)
	    // };
	    
	    // Add in a check to see if any customers were selected. If none, return 
	    // them all without filters
	    if(checkedDist.length === 0) {
	    	return feature;
	    }
	    
	    // get all the unique cities that come from these checked customers
	    var distList = {};
	    for(var i = 0, len = checkedDist.length; i < len; ++i) {
	      // if this checked customers cities isn't already in the cities object 
	      // add it
	      if(!distList.hasOwnProperty(checkedDist[i].properties.district)) {
	      	distList[checkedDist[i].properties.district] = true;
	      }
	      console.log(distList)

	  }

	    // Now that we have the cities that come from the checked customers, we can
	    //get all customers from those cities and return them
	    var ret = [];
	    for(var i = 0, len = feature.length;  i < len; ++i) {
	      // If this customer's city exists in the cities object, add it to the 
	      // return array
	      if(distList[feature[i].properties.district]) {
	      	ret.push(feature[i]);
	      } 
	  }

	    // we have our result!
	    return ret;
	};
})
.filter('capitalize', function() {
    return function(input, scope) {
        if (input!=null)
            {return input.substring(0,1).toUpperCase()+input.substring(1);}
    }
})
.filter('capArray', function() {
    return function(input, scope) {
        if (input!=null){
        	var split = input.split(/[ ,]+/);
        	var newArr = []; 
        	for (var i = 0; i < split.length; i++) {
        		newArr.push(split[i].substring(0,1).toUpperCase()+split[i].substring(1));
        	};
        	return newArr.join(" ");
        }
    }
});

// Don't need capitalize filter anymore...