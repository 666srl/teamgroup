'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */
angular.module('teamGroupApp')
  .controller('homepageCtrl', function ($scope,$http,$state) {
	$scope.num = 0;
  	$scope.srl = function(){
  		$scope.num++;
  		if ($scope.num%2 == 1) {
  			$(".srl-showtop").css("opacity",1).css("z-index","99");
  		} else{
  			$(".srl-showtop").css("opacity",0).css("z-index","-1");  		}
  	}
    $scope.tj = function(){ //职位调动
    	$state.go("add")
    }
    
    $scope.zw = function(){ //职位调动
    	$state.go("transfer")
    }
    $scope.qj = function(){ //请假
    	$state.go("leave")
    }
    $scope.bx = function(){ //报销
    	$state.go("applyfor")
    }
    $scope.cc = function(){ //出差
    	$state.go("businesstrip")
    }
    $scope.tx = function(){ //日常调休
    	$state.go("vacation")
    }
    
  });
