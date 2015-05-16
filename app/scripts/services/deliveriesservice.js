'use strict';

/**
 * @ngdoc service
 * @name dropeatApp.deliveriesService
 * @description
 * # deliveriesService
 * Service in the dropeatApp.
 */
angular.module('dropeatApp')
  .service('deliveriesService', function (localStorageService, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var deliveryHistory = localStorageService.get('deliveries');

    var deliveries = deliveryHistory || [];

	return {
        getProperty: function () {
            return deliveries;
        },
        setProperty: function(a,t) {
			deliveries.push({
				'address': a,
				'time': t,
			});
			//$http.get('http://localhost:5000/status')
			//.success(function() { console.log('success: drone on the way') })
			//.error(function() { console.log('error accessing the customer endpoint') })
            $http({method : 'GET',url : 'http://localhost:5000/status'})
            .success(function(data, status) {
                console.log('status', data);
            })
            .error(function(data, status) {
                console.log('fail')
            });
        }
    };
  });
