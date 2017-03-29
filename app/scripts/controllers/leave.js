'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */
angular.module('teamGroupApp').controller('leaveCtrl',function($scope,$http,$state){
	if(localStorage.loid == undefined){
		$state.go("login");
  }else{
  	
	$scope.jiantou = function(){
		$state.go("homepage");
	}
	$scope.arr = [];
  	$http({
  		url:"http://"+ip+"/users/"+localStorage.loid,
      	method:"get"
  	}).then(function(e){
//		console.log(e)
  		$scope.arr = e.data;
  		sessionStorage.xingming = e.data.xingming;
  		sessionStorage.tel = e.data.tel;
  		sessionStorage.zhiwei = e.data.zhiwei;
  	});
  	
  	
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
  	
  	
  	$scope.text1 ='';
  	$scope.liyou ='';
  	$scope.shijian1 ='';
  	$scope.shijian2 ='';
  	$scope.submit = function(){//提交按钮
  		if($scope.text1 == "" ||$scope.liyou ==""||$scope.shijian1 =="" ||$scope.shijian2 == ""){
  			$scope.zzc_show=true;
  			$scope.qr=function(){
					$scope.zzc_show=false;
				}
  		}else{
			$http({
			url:"http://"+ip+"/leave",
			method:"post",
			data:{
				xingming:sessionStorage.xingming,
				tel:sessionStorage.tel,
				zhiwei:sessionStorage.zhiwei,
				leibie:$scope.text1,
				liyou:$scope.liyou,
				time2:$scope.shijian2,
				status:1,
				uid:localStorage.loid
			}
		}).then(function(e){
//			console.log(e);
			$scope.shijian1 = '';
			$scope.shijian2 = '';
			$scope.liyou = '';
			$scope.text1 = '';
			$state.go("homepage");
		})
  	}
  	}
  	$scope.qx = function(){
  		$state.go("homepage");
  	}
}
  	})

  

