'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */
angular.module('teamGroupApp')
  .controller('vacationCtrl', function ($scope,$http,$state) {
  	$scope.arr_tx=[];
  	$scope.yy=""
  	$scope.starts=""
  	$scope.dates=""
    $http({
    	method:"get",
    	url:"http://"+ip+"/users/"+localStorage.loid
    })
    .then(function(req){
    	$scope.arr_tx=req.data
    	//console.log(req)
    	sessionStorage.xingming=req.data.xingming
		sessionStorage.tel=req.data.tel
		sessionStorage.zhiwei=req.data.zhiwei
    },function(error){
    	alert("请求失败")
    })
    $scope.tx_tj=function(){
    	if($scope.yy==""||$scope.starts==""||$scope.dates==""){
    		$scope.kong_yc=true
    	}else{
    		$scope.yc=true
    	}
    }
    
  });