'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */
angular.module('teamGroupApp')
  .controller('businesstripCtrl',function($scope,$http,$state,$interval){
  if(localStorage.loid == undefined){
		$state.go("login");
  }else{
  	
  	$scope.arr_cssq=[];
  	$scope.start="";
	$scope.end="";
	$scope.text="";
	$scope.sqqx=function(){
		$scope.start="";
		$scope.end="";
		$scope.text="";
		$state.go('homepage')
	}
  	$http({
  		url:"http://"+ip+"/users/"+localStorage.loid,
  		method:'get'
  	}).then(function(rep){
//		console.log(rep)
		$scope.arr_cssq=rep.data;
		sessionStorage.xingming=rep.data.xingming
		sessionStorage.tel=rep.data.tel
		sessionStorage.zhiwei=rep.data.zhiwei
  	})
  	
  	$scope.srb = function(){
  		var end = $('.end').val();
  		var state = $('.state').val();
  		if(end.replace("-", "").replace("-", "") - state.replace("-", "").replace("-", "")<=0){
  			$scope.kong_yc =true;
  			$scope.text = "您的时间填写错误";
  		}
  		console.log(end.replace("-", "").replace("-", "") - state.replace("-", "").replace("-", ""))
  	}
  	
  	$scope.kong_qx = function(){
  		$scope.kong_yc =false;
  	}
  	
  	
  	$scope.sq_tj=function(){
//		console.log($scope.start|$scope.end)
  		if($scope.start==""||$scope.end==""||$scope.text==""){
    		$scope.kong_yc=true
  		}else{
  			$scope.yc=true
  		}
  		$scope.yc_qx=function(){
  			$scope.yc=false
  			$scope.start="";
			$scope.end="";
			$scope.text="";
  		}
  		$scope.yc_qd=function(){
  			$http({
	  			method:"POST",
	  			url:"http://"+ip+"/businesstrip",
	  			data:{
	  				tel:sessionStorage.tel,
	  				xingming:sessionStorage.xingming,
	  				zhiwei:sessionStorage.zhiwei,
	  				time1:$scope.start,
	  				time2:$scope.end,
	  				baogao:$scope.text,
	  				status:1,
	  				uid:localStorage.loid
	  			}
	  		})
	  		.then(function(e){
//	  			console.log(e)
				$scope.yc=false
				$scope.start="";
				$scope.end="";
				$scope.text="";
				$state.go("homepage")
	  		})
  		}
  		
  	}
  	$scope.sq_qx=function(){
  			$state.go("homepage")
  	}
  	$scope.kong_qx=function(){
  		$scope.kong_yc=false
  	}
  }
  });
