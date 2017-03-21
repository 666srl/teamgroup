'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */

angular.module('teamGroupApp')
	.controller('bossCtrl', function($scope, $http) {
		$scope.arr = [];
		$http({
			url: "http://" + ip + "/apply-for",
			method: "get",
		}).then(function(e){
			console.log(e.data)
			$scope.arr = e.data
			$http({
			url: "http://" + ip + arr.uid,
			method: "get",
		}).then(function(sa){
			console.log(sa)
		})
	})

		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		$scope.tongyi = function() {
			$http({
				url: "http://" + ip + "/users/",
				method: "post",
				data: {
					state: 1
				}
			})
		}
		$scope.butongyi = function() {
			$http({
				url: "http://" + ip + "/users/",
				method: "post",
				data: {
					state: 0
				}
			})
		}

	});