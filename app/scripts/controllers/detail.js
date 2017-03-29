'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */
angular.module('teamGroupApp')
	.controller('detailCtrl', function($scope, $http, $state) {
		$scope.arraa = []
		$scope.arrbb = []
		$scope.arrcc = []
		$scope.arrdd = []
		$scope.arree = []
		$scope.arrff = []
		$scope.arrgg = []
		$scope.arrhh = []
		$scope.arrii = []
		$scope.arrjj = []
		
		$scope.gi=function(){
			$state.go("staff")
		}		
		$http({
			url: "http://" + ip + "/leave/?uid=" + localStorage.loid,
			method: "get",
		}).then(function(e) {
			$scope.arraa = e.data;
//			console.log($scope.arraa)
			for(var i = 0; i < $scope.arraa.length; i++) {
				$scope.arrbb.push($scope.arraa[i].id)
//				console.log($scope.arrbb)
//				console.log($scope.arrbb[i])
				$http({
					url: "http://" + ip + "/leave/" + $scope.arrbb[i],
					method: "get",
				}).then(function(e) {
					console.log(e)
//					console.log(e.data.status)
					$scope.shanchu = function(index,a) {
//						alert(1)
						console.log(index)
						$http({
							url: "http://" + ip + "/leave/"+ a,
							method: "delete",
						}).then(function(e) {
							$scope.arraa.splice(index,1)
						})
					}
				})
			}	
		})
		
	$http({
			url: "http://" + ip + "/apply-for/?uid=" + localStorage.loid,
			method: "get",
		}).then(function(e) {
			$scope.arrcc = e.data;
//			console.log($scope.arrcc)
			for(var i = 0; i < $scope.arrcc.length; i++) {
				$scope.arrdd.push($scope.arrcc[i].id)
//				console.log($scope.arrdd)
//				console.log($scope.arrdd[i])
				$http({
					url: "http://" + ip + "/apply-for/" + $scope.arrdd[i],
					method: "get",
				}).then(function(e) {
//					console.log(e)
//					console.log(e.data.status)
					$scope.shanchu1= function(index,a) {
//						console.log(index)
						$http({
							url: "http://" + ip + "/apply-for/" + a,
							method: "delete",
						}).then(function(e) {
							$scope.arrcc.splice(index,1)
						})
					}
				})
			}	
		})
			
		$http({
			url: "http://" + ip + "/businesstrip/?uid=" + localStorage.loid,
			method: "get",
		}).then(function(e) {
			$scope.arree = e.data;
//			console.log($scope.arree)
			for(var i = 0; i < $scope.arree.length; i++) {
				$scope.arrff.push($scope.arree[i].id)
//				console.log($scope.arrff)
//				console.log($scope.arrff[i])
				$http({
					url: "http://" + ip + "/businesstrip/" + $scope.arrff[i],
					method: "get",
				}).then(function(e) {
//					console.log(e)
//					console.log(e.data.status)
					$scope.shanchu2= function(index,a) {
//						console.log(index)
						$http({
							url: "http://" + ip + "/businesstrip/" + a,
							method: "delete",
						}).then(function(e) {
							$scope.arree.splice(index,1)
						})
					}
				})
			}	
		})	
		
		
		$http({
			url: "http://" + ip + "/transfer/?uid=" + localStorage.loid,
			method: "get",
		}).then(function(e) {
			$scope.arrgg = e.data;
//			console.log($scope.arrgg)
			for(var i = 0; i < $scope.arrgg.length; i++) {
				$scope.arrhh.push($scope.arrgg[i].id)
//				console.log($scope.arrhh)
//				console.log($scope.arrhh[i])
				$http({
					url: "http://" + ip + "/transfer/" + $scope.arrhh[i],
					method: "get",
				}).then(function(e) {
//					console.log(e)
//					console.log(e.data.status)
					$scope.shanchu3= function(index,a) {
//						console.log(index)
						$http({
							url: "http://" + ip + "/transfer/" + a,
							method: "delete",
						}).then(function(e) {
							$scope.arrgg.splice(index,1)
						})
					}
				})
			}	
		})
		
		
		$http({
			url: "http://" + ip + "/vacation/?uid=" + localStorage.loid,
			method: "get",
		}).then(function(e) {
			$scope.arrii = e.data;
//			console.log($scope.arrii)
			for(var i = 0; i < $scope.arrii.length; i++) {
				$scope.arrjj.push($scope.arrii[i].id)
//				console.log($scope.arrjj)
//				console.log($scope.arrjj[i])
				$http({
					url: "http://" + ip + "/vacation/" + $scope.arrjj[i],
					method: "get",
				}).then(function(e) {
//					console.log(e)
					$scope.shanchu4= function(index,a) {
//						console.log(index)
						$http({
							url: "http://" + ip + "/vacation/" + a,
							method: "delete",
						}).then(function(e) {
							$scope.arrii.splice(index,1)
						})
					}
				})
			}	
		})	
	})
