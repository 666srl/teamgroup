'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */
angular.module('teamGroupApp')
  .controller('businesstripCtrl',['$scope','$http',function($scope,$http){
  	var host = 'http://47.88.16.225:404/users/businesstrip'
  	$http({
  		url:host
  	})
  }]);
