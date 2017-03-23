'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */
angular.module('teamGroupApp')
  .controller('businesstripCtrl',function($scope,$http,$state){
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
  	},function(error){
		alert('请求失败')
	})
  	$scope.sq_tj=function(){
  		console.log($scope.start|$scope.end)
  		if($scope.start==""||$scope.end==""||$scope.text==""){
  			alert("请填写完整")
  		}else{
  			$scope.yc=true
  			$scope.start="";
			$scope.end="";
			$scope.text="";
  		}
  		$scope.yc_qx=function(){
  			$scope.yc=false
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
				$scope.yc=false
				$scope.start="";
				$scope.end="";
				$scope.text="";
				$state.go("homepage")
	  		},function(error){
	  			//alert('请求失败')
	  		})
  		}
  		
  	}
  	$scope.sq_qx=function(){
  			$state.go("homepage")
  		}
  });
