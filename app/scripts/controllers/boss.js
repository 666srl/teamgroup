'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */
angular.module('teamGroupApp')
  .controller('bossCtrl', ["$scope","$http",function () {
      $http({
      	url:"http://47.88.16.225:404/users",
      	method:"get"
      })
      
  }]);