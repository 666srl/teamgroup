'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */
angular.module('teamGroupApp')
  .controller('transferCtrl', ["$scope","$http",function ($scope,$http) {
    $scope.shenqing = function(){
    	
    	$http({
    		url:"http://"+ip+"/transfer",
    		method:"post",
    		data:{
    			diaorubumen:$scope.bumen,
    			diaorugangwei:$scope.gangwei,
    			diaorudidian:$scope.didian,
    			diaoruyuanyin:$scope.btn,
    			
    		}
    	}).then(function(data){
    		console.log(data);
    	})
    }
  }]);
