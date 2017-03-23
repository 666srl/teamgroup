'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */
angular.module('teamGroupApp')
  .controller('staffCtrl', function ($scope,$http,$state) {
  	$scope.arr=[];
  	    $scope.gogo=function(){
  	    	$state.go("homepage")
  	    }
    $http({
		    url: "http://" + ip + "/user/"+id,
			method: "get",
		}).then(function(e) {
			console.log(e)
//			$scope.arr = e.data
		})
  });
