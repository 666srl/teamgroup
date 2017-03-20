'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */
angular.module('teamGroupApp')
  .controller('addCtrl', ["$scope",function($scope){
  $scope.x = false;
  $scope.xs = function(){
  	$scope.x = true;
  }
  $scope.qx = function(){
  	$scope.x = false;
  }
  }]);
