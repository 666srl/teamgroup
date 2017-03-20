'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */
angular.module('teamGroupApp')
  .controller('addCtrl', ["$scope","$http",function($scope,$http){
  	$scope.name=""
  	$scope.zhiwei=""
  	$scope.user=""
  	$scope.pass=""
  	$scope.tel=""
  	
  $scope.x = false;
  $scope.tj = function(){
  	$http({
		 		url:"47.88.16.225:404/users"
		 		,method:"post",
		 		data:{
		 				username:$scope.user,
		 				password:$scope.pass,
		 				tel:$scope.tel,
		 				zhiwei:$scope.zhiwei,
		 				xingming:$scope.name,
		 				
		 		}
		 	}).then(function(data){
		 		console.log(data)
		 	})
  }
  $scope.xs = function(){
  	$scope.x = true;
  }
  $scope.qx = function(){
  	$scope.x = false;
  }
  
  }]);
