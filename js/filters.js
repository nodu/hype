'use strict';

/* Filters */

angular.module('myApp.filters', []).
filter('selectedFeatureTags', function($filter) {
	return function(feature) {
		var len;

	    // get customers that have been checked
	    // var checkedTags = $filter('filter')(feature, {checked: true});
	    var checkedTags = ["pie", "doh" ]
	    // console.log(checkedTags.length);
	    
	    // Add in a check to see if any customers were selected. If none, return 
	    // them all without filters
	    if(checkedTags.length === 0) {
	    	return feature;
	    }
	    
	    // get all the unique cities that come from these checked customers
	    var tagList = {};
	    for(var i = 0, len = checkedTags.length; i < len; ++i) {
	      // if this checked customers cities isn't already in the cities object 
	      // add it
	      if(!tagList.hasOwnProperty(checkedTags[i].properties.tags[1])) {
	      	tagList[checkedTags[i].properties.tags[1]] = true;
	      }
	      console.log(tagList)

	  }

	    // Now that we have the cities that come from the checked customers, we can
	    //get all customers from those cities and return them
	    var ret = [];
	    for(var i = 0; i < feature.length; ++i) {
	      // If this customer's city exists in the cities object, add it to the 
	      // return array
	      if(tagList[feature[i].tags]) {
	      	ret.push(feature[i]);
	      } 
	  }

	    // we have our result!
	    return ret;
};
});
 // $scope.customers = [
 //    { firstName: 'Joe', lastName: 'Smith', address: 'some st.', city: 'City One' },
 //    { firstName: 'Bob', lastName: 'Mason', address: 'hello st.', city: 'City One' },
 //    { firstName: 'James', lastName: 'Henry', address: 'goodmorning st.', city: 'City One' },
 //    { firstName: 'Trevor', lastName: 'Senior', address: 'another rd.', city: 'Another City' },
 //    { firstName: 'Sally', lastName: 'Smith', address: 'rainbow rd.', city: 'Another City' },
 //    { firstName: 'Ben', lastName: 'Hornby', address: 'lonely ave.', city: 'Nonesuch' }
 //  ];