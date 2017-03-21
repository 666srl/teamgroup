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
  	$scope.g = false;
  	$scope.gg = true;
  	$scope.f = true;
  	$scope.arr =[];
  	
  	
  	$scope.xuigai = function(e,b){//修改
//		console.log(b)
//		console.log($scope.arr[this.$index])
  		$scope.i=e
  		$scope.g = true;
  		$scope.gg = false;
  	}
  	$scope.wc = function(){
  		$scope.g = false;
  	$scope.gg = true;
  	}
	$http({
		 		url:"http://"+ip+"/users",
		 		method:"get",
		 	}).then(function(data){
//		 		console.log(data)
		 		$scope.arr =data.data;
		 		
		 	})
    $scope.x = false;
  $scope.tj = function(){
  	$http({
		 		url:"http://"+ip+"/users",
		 		method:"post",
		 		data:{
		 				username:$scope.user,
		 				bumen:$scope.bumen,
		 				didian:$scope.didian,
		 				password:$scope.pass,
		 				tel:$scope.tel,
		 				zhiwei:$scope.zhiwei,
		 				xingming:$scope.name,
		 				state:$scope.zhangtai
		 				
		 		}
		 	}).then(function(data){
//		 		console.log(data)
		 		$scope.name=""
				$scope.zhiwei=""
				$scope.user=""
				$scope.pass=""
				$scope.tel=""
				$scope.bumen=""
				$scope.x = false;
				$scope.f = true;
	
		 	})
  }
  
  
 
  $scope.sc = function(a,index){
  	$http({
		 		url:"http://"+ip+"/users/"+a,
		 		method:"delete",
		 }).then(function(data){	
		 	console.log(data)
		 	$scope.arr.splice(index,1)
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
