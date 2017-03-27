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
		$scope.arr6 = [];
		$scope.arr7 = [];
		$scope.arr8 = [];
		$scope.arr9 = [];
		$scope.arr10 = [];
		$scope.arr11 = [];
		$scope.arr12 = [];
		$scope.arr13 = [];
		$scope.arr14 = [];
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
					$scope.arr5.push($scope.arr[i]);
					console.log($scope.arr5)
				}
			}
			for(var i = 0; i < $scope.arr.length; i++) {
				var has = false;
				var data = $scope.arr[i];
				for(var j = 0; j < $scope.arr5.length; j++) {
					if(data == $scope.arr5[j]) {
						has = true;
						break;
					}
				}
				if(has == false) {
					$scope.arr6.push(data);
//					console.log($scope.arr6)
				}
			}

		})

		$http({
			url: "http://" + ip + "/apply-for",
			method: "get",
		}).then(function(e) {
			$scope.arr1 = e.data
			$scope.lei2 = "报销";
			for(var i = 0; i < $scope.arr1.length; i++) {
//				console.log(i)
				if(localStorage.loid == $scope.arr1[i].uid && localStorage.zt == $scope.arr1[i].status) {
					$scope.arr7.push($scope.arr1[i]);
//					console.log($scope.arr7)
				}
			}
			for(var i = 0; i < $scope.arr1.length; i++) {
				var has = false;
				var data = $scope.arr1[i];
				for(var j = 0; j < $scope.arr7.length; j++) {
					if(data == $scope.arr7[j]) {
						has = true;
						break;
					}
				}
				if(has == false) {
					$scope.arr8.push(data);
//					console.log($scope.arr7)
				}
			}
		})
		$http({
			url: "http://" + ip + "/businesstrip",
			method: "get",
		}).then(function(e) {
			$scope.arr2 = e.data
			$scope.lei3 = "出差";
			for(var i = 0; i < $scope.arr2.length; i++) {
//				console.log(i)
				if(localStorage.loid == $scope.arr2[i].uid && localStorage.zt == $scope.arr2[i].status) {
					$scope.arr9.push($scope.arr2[i]);
//					console.log($scope.arr9)
				}
			}
			for(var i = 0; i < $scope.arr2.length; i++) {
				var has = false;
				var data = $scope.arr2[i];
				for(var j = 0; j < $scope.arr9.length; j++) {
					if(data == $scope.arr9[j]) {
						has = true;
						break;
					}
				}
				if(has == false) {
					$scope.arr10.push(data);
//					console.log($scope.arr10)
				}
			}
		})
		$http({
			url: "http://" + ip + "/vacation",
			method: "get",
		}).then(function(e) {
			$scope.arr3 = e.data
			$scope.lei4 = "调休";
			for(var i = 0; i < $scope.arr3.length; i++) {
//				console.log(i)
				if(localStorage.loid == $scope.arr3[i].uid && localStorage.zt == $scope.arr3[i].status) {
					$scope.arr11.push($scope.arr3[i]);
//					console.log($scope.arr11)
				}
			}
			for(var i = 0; i < $scope.arr3.length; i++) {
				var has = false;
				var data = $scope.arr3[i];
				for(var j = 0; j < $scope.arr11.length; j++) {
					if(data == $scope.arr11[j]) {
						has = true;
						break;
					}
				}
				if(has == false) {
					$scope.arr12.push(data);
//					console.log($scope.arr12)
				}
			}
		})
		$http({
			url: "http://" + ip + "/transfer",
			method: "get",
		}).then(function(e) {
			$scope.arr4 = e.data
			$scope.lei5 = "职位调动";
			for(var i = 0; i < $scope.arr4.length; i++) {
//				console.log(i)
				if(localStorage.loid == $scope.arr4[i].uid && localStorage.zt == $scope.arr4[i].status) {
					$scope.arr13.push($scope.arr4[i]);
//					console.log($scope.arr13)
				}
			}
			for(var i = 0; i < $scope.arr4.length; i++) {
				var has = false;
				var data = $scope.arr4[i];
				for(var j = 0; j < $scope.arr13.length; j++) {
					if(data == $scope.arr13[j]) {
						has = true;
						break;
					}
				}
				if(has == false) {
					$scope.arr14.push(data);
//					console.log($scope.arr14)
				}
			}
		})
        
		$scope.tongyi = function(a,index){
			$http({
				url: "http://" + ip + "/leave/" + a,
				method: "put",
				data: {
					status: 0
				}
			})
			$http({
				url: "http://" + ip + "/leave/" + a,
				method: "get",
			}).then(function(e){
				$scope.arr6.splice(index,1)
			})
		}
		$scope.butongyi = function(a,index) {
			$http({
				url: "http://" + ip + "/leave/" + a,
				method: "put",
				data: {
					status: 1
				}
			})
			$http({
				url: "http://" + ip + "/leave/" + a,
				method: "get",
			}).then(function(e){
				$scope.arr6.splice(index,1)
			})
		}
		$scope.tongyi1 = function(a,index) {

			$http({
				url: "http://" + ip + "/apply-for/" + a,
				method: "put",
				data: {
					status: 0
				}
			})
			$http({
				url: "http://" + ip + "/apply-for/" + a,
				method: "get",
			}).then(function(e){
				$scope.arr8.splice(index,1)
			})
		}
		$scope.butongyi1 = function(a,index) {
			$http({
				url: "http://" + ip + "/apply-for/" + a,
				method: "put",
				data: {
					status: 1
				}
			})
			$http({
				url: "http://" + ip + "/apply-for/" + a,
				method: "get",
			}).then(function(e){
				$scope.arr8.splice(index,1)
			})
		}
		$scope.tongyi2 = function(a,index) {
			$http({
				url: "http://" + ip + "/businesstrip/" + a,
				method: "put",
				data: {
					status: 0
				}
			})
			$http({
				url: "http://" + ip + "/businesstrip/" + a,
				method: "get",
			}).then(function(e){
				$scope.arr10.splice(index,1)
			})
		}
		$scope.butongyi2 = function(a,index) {
			$http({
				url: "http://" + ip + "/businesstrip/" + a,
				method: "put",
				data: {
					status: 1
				}
			})
			$http({
				url: "http://" + ip + "/businesstrip/" + a,
				method: "get",
			}).then(function(e){
				$scope.arr10.splice(index,1)
			})
		}
		$scope.tongyi3 = function(a,index) {
			$http({
				url: "http://" + ip + "/vacation/" + a,
				method: "put",
				data: {
					status: 0
				}
			})
			$http({
				url: "http://" + ip + "/vacation/" + a,
				method: "get",
			}).then(function(e){
				$scope.arr12.splice(index,1)
			})
		}
		$scope.butongyi3 = function(a,index) {
			$http({
				url: "http://" + ip + "/vacation/" + a,
				method: "put",
				data: {
					status: 1
				}
			})
			$http({
				url: "http://" + ip + "/vacation/" + a,
				method: "get",
			}).then(function(e){
				$scope.arr12.splice(index,1)
			})
		}
		$scope.tongyi4 = function(a,index) {
			$http({
				url: "http://" + ip + "/transfer/" + a,
				method: "put",
				data: {
					status: 0
				}
			})
			$http({
				url: "http://" + ip + "/transfer/" + a,
				method: "get",
			}).then(function(e){
				$scope.arr14.splice(index,1)
			})
		}
		$scope.butongyi4 = function(a,index) {
			$http({
				url: "http://" + ip + "/transfer/" + a,
				method: "put",
				data: {
					status: 1
				}
			})
			$http({
				url: "http://" + ip + "/transfer/" + a,
				method: "get",
			}).then(function(e){
				$scope.arr14.splice(index,1)
			})
			
		}
	});