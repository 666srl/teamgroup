'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */
angular.module('teamGroupApp')
  .controller('loginCtrl', function ($scope,$http,$state) {
  	$scope.username = '';
	$scope.user = function(){
		var name = /^[a-zA-Z]/;
		if($scope.username == ''){
			$scope.nr = "请输入用户名";
			$scope.yz = true;
		}else {
			if (name.test($scope.username) == false) {
				$scope.yz = true;
				$scope.nr = "用户名为字母缩写";
			}
		}
	}
	
	$scope.password = ''
	$scope.tel = function(){
		var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
		
		if($scope.password == ''){
			$scope.yz = true;
			$scope.nr = "温馨提示：请输入密码";
		}
		else {
			if (reg.test($scope.password) == false) {
				$scope.yz = true;
				$scope.nr = "请输入正确的密码";
			}
			
		}
	}
	
	$scope.close = function(){
		$scope.yz = false;
	}
	
	
  	$scope.submit = function(){//登录
		$http({
    	url:"http://"+ip+"/users/login",
    	method:"POST",
    	data:{
    		"username":$scope.username,
    		"password":$scope.password
    	}
    }).then(function(e){
    	localStorage.loid = e.data.uid;
    	console.log(e);
    	$http({
    		url:"http://"+ip+"/users/"+localStorage.loid,
    		method:"get"
    	}).then(function(respone){
//  		console.log(respone);
    			$state.go("homepage");
    	})
    	
    },function(){
    	$scope.yz = true;
		$scope.nr = "温馨提示：用户不存在";
    })

}

    
    
 })
