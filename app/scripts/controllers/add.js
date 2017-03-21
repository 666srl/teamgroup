'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */
angular.module('teamGroupApp')
  .controller('addCtrl', function($scope,$http,$state){
  	
  	$scope.f = true;
  	$scope.arr =[]
	$http({
		 		url:"http://"+ip+"/users",
		 		method:"get",
		 	}).then(function(data){
		 		console.log(data)
		 		$scope.arr =data.data
		 		
		 	})
    $scope.x = false;
  $scope.tj = function(){
  	$http({
		 		url:"http://"+ip+"/users",
		 		method:"POST",
		 		data:{
		 				username:$scope.user,
		 				bumen:$scope.bumen,
		 				didian:$scope.didian,
		 				password:$scope.pass,
		 				tel:$scope.tel,
		 				zhiwei:$scope.zhiwei,
		 				xingming:$scope.name,
		 				
		 		}
		 	}).then(function(data){
//		 		console.log(data)
		 		$scope.name=""
				$scope.zhiwei=""
				$scope.user=""
				$scope.pass=""
				$scope.tel=""
				$scope.bumen=""
	
		 	})
  }
  
  
  
  $scope.sc = function(){
  	$http({
		 		url:"http://"+ip+"/users",
		 		method:"get",
		 	}).then(function(data){
//		 		console.log(data)
		 		$scope.arr =data.data
		 	})
  }
  
  
  
  
  $scope.xs = function(){
  	$scope.x = true;
  	$scope.f = false;
  }
  $scope.qx = function(){
  	$scope.x = false;
  	$scope.f = true;
  	
  }
  $scope.tuichu = function(){
  	$state.go("homepage")
  }
  });
