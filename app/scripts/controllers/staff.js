'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */
angular.module('teamGroupApp')
  .controller('staffCtrl', function ($scope,$http) {
      $http({
			url: "http://" + ip + "/leave",
			method: "get",
		}).then(function(e) {
			$scope.arr = e.data
  });
