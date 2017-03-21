'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */
angular.module('teamGroupApp').controller('leaveCtrl',function($scope,$http){
  	$http({
  		url:"http://"+ip+"/users/",
      	method:"post",
      	data:{
      	    xingming:$scope.xingming,
      	    bumen:$scope.bumen,
      	    gangwei:$scope.gangwei,
      	    yuanyin:$scope.yuanyin,
      	    shijian:$scope.shijian
      	}
  	}).then(function(e){
  		console.log(e)
  	})
  		
  	})

