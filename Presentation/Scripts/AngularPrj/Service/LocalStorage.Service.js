﻿LoanApp.service('$localStorage', ['$window', function ($window) {
	return {
		set: function (key, value) {
			$window.localStorage[key] = value;
		},
		get: function (key, defaultValue) {
			return $window.localStorage[key] || defaultValue;
		},
		remove: function (key) {
		    localStorage.removeItem(key);
		},
		clear: function () {
		    $window.localStorage.clear();
		}
	    /// Additional setObject and getObject Functionality
        //,
		//setObject: function (key, value) {
		//	$window.localStorage[key] = JSON.stringify(value);
		//},
		//getObject: function (key) {
		//	return JSON.parse($window.localStorage[key] || '{}');
		//}
	}
}]);
