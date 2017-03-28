'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */

angular.module('teamGroupApp')
	.controller('bossCtrl', function($scope, $http, $state) {
		
	if(localStorage.Storage == undefined){
		$state.go("login");
  }else {
		$scope.go = function() {
			$state.go("homepage")
		}
		$scope.arr = [];
		$scope.arr1 = [];
		$scope.arr2 = [];
		$scope.arr3 = [];
		$scope.arr4 = [];
		$scope.lei1 = "";
		$scope.lei2 = "";
		$scope.lei3 = "";
		$scope.lei4 = "";
		$scope.lei5 = "";
		$scope.arr5 = [];

		//		$http({
		//			url: "http://" + ip + "/apply-for",
		//			method: "get", 
		//		}).then(function(e){
		//			$scope.arr = e.data
		//			console.log($scope.arr)
		//			for(var i=0;i<$scope.arr.length;i++){
		//				$scope.aaa.push($scope.arr[i].uid)
		//				console.log($scope.aaa)
		//			}
		//				$http({
		////					url: 'http://' + ip + '"/users/?{"id":{"$in":'+ $scope.aaa +'}}',
		//                  url: 'http://' + ip + '"/users/?{"id":{"$in":["33afb9fdc9dec8df", "33afb9fdc9dec8df", "e3493b5add021824", "33afb9fdc9dec8df"]}}',
		//
		//					method: "get",
		//				}).then(function(sa){	
		//					$scope.arra.push(sa.data)
		//					console.log($scope.arra)
		//				})
		//		})
		$http({
			url: "http://" + ip + "/leave",
			method: "get",
		}).then(function(e) {
			$scope.arr = e.data
			$scope.lei1 = "请假";
			console.log($scope.arr)
			for(var i = 0; i < $scope.arr.length; i++) {
				console.log(i)
				if(localStorage.loid == $scope.arr[i].uid && localStorage.zt == $scope.arr[i].status) {
					$scope.arr[i].status="2"
				}
			}
		})

				$http({
					url: "http://" + ip + "/apply-for",
					method: "get",
				}).then(function(e){
					$scope.arr1 = e.data
					$scope.lei2 ="报销";
				})
				$http({
					url: "http://" + ip + "/businesstrip",
					method: "get",
				}).then(function(e) {
					$scope.arr2 = e.data
					$scope.lei3 ="出差";
				})
				$http({
					url: "http://" + ip + "/vacation",
					method: "get",
				}).then(function(e) {
					$scope.arr3 = e.data
					$scope.lei4 ="调休";
				})
				$http({
					url: "http://" + ip + "/transfer",
					method: "get",
				}).then(function(e) {
					$scope.arr4 = e.data
		          $scope.lei5 ="职位调动";
				})
					$scope.tongyi = function(a,b) {
					$http({
						url: "http://" + ip + "/leave/"+a,
						method: "put",
						data: {
							status:0
						}
					})
				}			
				$scope.butongyi = function(a) {
					$http({
						url: "http://" + ip + "/leave/"+a,
						method: "put",
						data: {
							status: 1
						}
					})
				}
				$scope.tongyi1 = function(a) {
					
					
					$http({
						url: "http://" + ip + "/apply-for/"+a,
						method: "put",
						data: {
							status:0
						}
					})
				}
				$scope.butongyi1 = function(a) {
					$http({
						url: "http://" + ip + "/apply-for/"+a,
						method: "put",
						data: {
							status: 1
						}
					})
				}
				$scope.tongyi2 = function(a) {
					$http({
						url: "http://" + ip + "/businesstrip/"+a,
						method: "put",
						data: {
							status:0
						}
					})
				}
				$scope.butongyi2 = function(a) {
					$http({
						url: "http://" + ip + "/businesstrip/"+a,
						method: "put",
						data: {
							status: 1
						}
					})
				}
				$scope.tongyi3 = function(a) {
					$http({
						url: "http://" + ip + "/vacation/"+a,
						method: "put",
						data: {
							status:0
						}
					})
				}
				$scope.butongyi3 = function(a) {
					$http({
						url: "http://" + ip + "/vacation/"+a,
						method: "put",
						data: {
							status: 1
						}
					})
				}
				$scope.tongyi4 = function(a) {
					$http({
						url: "http://" + ip + "/transfer/"+a,
						method: "put",
						data: {
							status:0
						}
					})
				}
				$scope.butongyi4 = function(a) {
					$http({
						url: "http://" + ip + "/transfer/"+a,
						method: "put",
						data: {
							status: 1
						}
					})
				}
		}
	});