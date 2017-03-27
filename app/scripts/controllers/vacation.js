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
    	console.log(req)
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
    $scope.yc_qd=function(){
    		$http({
	    		method:"post",
	    		url:"http://"+ip+"/vacation",
	    		data:{
	    			yuanyin:$scope.yy,
	    			time1:$scope.starts,
	    			time2:$scope.dates,
	    			status:1,
	    			uid:localStorage.loid,
	    			zhiwei:sessionStorage.zhiwei,
	    			xingming:sessionStorage.xingming,
	    			tel:sessionStorage.tel
	    		}
	    	})
	    	.then(function(ev){
	    		//console.log(ev)
	    		$scope.yc=false
	    		$scope.yy=""
			  	$scope.starts=""
			  	$scope.dates=""
			  	$state.go("homepage")
	    	},function(error){
	    		alert("请求失败，联系后台技术人员")
	    	})
    }
    $scope.tx_qx=function(){
    	$state.go("homepage")
    }
   	$scope.yc_qx=function(){
    	$scope.yc=false
    	$scope.yy=""
	  	$scope.starts=""
	  	$scope.dates=""
    }
   	$scope.tx_fh=function(){
   		$state.go("homepage")
   	}
   	$scope.kong_qx=function(){
   		$scope.kong_yc=false
   		
   	}
  });