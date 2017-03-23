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
  	    $scope.gogo=function(){
  	    	$state.go("homepage")
  	    }
     
  });
