'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */
angular.module('teamGroupApp')
	.controller('transferCtrl', function($scope, $http, $state) {
	if(localStorage.loid == undefined){
		$state.go("login");
  }else{
		$scope.jiantou = function() {
			$state.go("homepage")
		}
		$scope.arr = [];
		$http({
			url: "http://" + ip + "/users/" + localStorage.loid,
			method: "get",

		}).then(function(data) {
			$scope.arr = data.data;
			sessionStorage.xingming = data.data.xingming;
			sessionStorage.zhiwei = data.data.zhiwei;
			sessionStorage.tel = data.data.tel;

		})
		$scope.yuanyin = "";
		$scope.zzc_show=false;
		$scope.tj = function() {
			console.log($scope.didian == "")
			if($scope.yuanyin == "") {
				$scope.zzc_show=true;
				$scope.qr=function(){
					$scope.zzc_show=false;
				}
			} else {
				$http({
					url: "http://" + ip + "/transfer",
					method: "post",
//					
					data: {
						xingming: sessionStorage.xingming,
						zhiwei: sessionStorage.zhiwei,
						tel: sessionStorage.tel,
						diaorubumen: $('#bm').val(),
						diaorugangwei: $('#gangwei').val(),
						diaorudidian: $('#didian').val(),
						diaoruyuanyin: $('#yuanyin').val(),
						status:1,
						uid:localStorage.loid,
						time:$scope.sqsj
					}
				}).then(function(data) {
					console.log(data);
					$state.go("homepage");
				})
			}

		}
		
		


	$scope.back = function(){
		$state.go("homepage");
	}
	}
	});