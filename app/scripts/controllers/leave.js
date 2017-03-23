'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */
angular.module('teamGroupApp')
.controller('leaveCtrl',function($scope,$http){
  $scope.arr = [];
  $http({
  	url:"http://"+ip+"/users/"+localStorage.loid,
  	method:"get",
  	
  }).then(function(tbdb){
  	$scope.arr = tbdb.data;
  	console.log(tbdb)
  })
  $scope.aa = function(){
  	$http({
  		url:"http://"+ip+"/leave",
  		method:"post",
  		data:{
  			leibie:$scope.lei,
  			time1:$scope.begin,
  			time2:$scope.ends,
  			liyou:$scope.yuanyin,
  			status:1,
			uid:localStorage.loid
  		}
  	}).then(function(data){
  		$scope.lei = '';
  		$scope.begin = '';
  		$scope.ends = '';
  		$scope.yuanyin = '';
  	})
  }
  
  
  
  
  
  
  
  
  
})

