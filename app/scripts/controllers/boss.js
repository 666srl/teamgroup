'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */
angular.module('teamGroupApp')
  .controller('bossCtrl', ["$scope","$http",function ($scope,$http) {
      $http({
      	url:"http://"+ip+"/users",
      	method:"get",	
      }).then(function(e){
      	console.log(e.data)
      })
      
  }]);