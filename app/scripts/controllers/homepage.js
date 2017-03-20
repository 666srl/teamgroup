'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */
angular.module('teamGroupApp')
  .controller('homepageCtrl', ["$scope",function ($scope) {
	$scope.num = 0;
  	$scope.srl = function(){
  		$scope.num++;
  		if ($scope.num%2 == 1) {
  			$(".srl-showtop").css("opacity",1).css("z-index","99");
  		} else{
  			$(".srl-showtop").css("opacity",0).css("z-index","-1");  		}
  	}
    
    
  }]);
