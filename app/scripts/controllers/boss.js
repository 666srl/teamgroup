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
		}).then(function(e) {
			console.log(e.data)
			$scope.arr = e.data
			var index = 0;
			for(var i = 0; i < $scope.arr.length; i++) {
				index = i;
				console.log($scope.arr[index].uid)
				$http({
					url: "http://" + ip + "/users/"+$scope.arr[index].uid,
					method: "get",
				}).then(function(sa){
					console.log(sa)
					
				})

			}

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