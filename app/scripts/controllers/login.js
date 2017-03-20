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
			alert("请输入用户名");
		}else {
			if (name.test($scope.username) == false) {
				alert("用户名为字母缩写")
			}
		}
	}
	
	$scope.password = ''
	$scope.tel = function(){
		var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
		
		if($scope.password == ''){
			alert("请输入密码");
		}
		else {
			if (reg.test($scope.password) == false) {
				alert("请输入正确的密码")
			}
			
		}
	}
	
  	$scope.submit = function(){
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
    		console.log(respone);
    		localStorage.loname = respone.data.username;
//  		if (respone.data.username == 'srl') {
    			$state.go("homepage")
//  		}
    	})
    	
    })

}

    
    
 })
