'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */
angular.module('teamGroupApp')
	.controller('staffCtrl', function($scope, $http, $state) {
		if(localStorage.Storage == undefined){
		$state.go("login");
  }else{
		$scope.a, $scope.b, $scope.c, $scope.d, $scope.e, $scope.f, $scope.g, $scope.h, $scope.i, $scope.j = false;
		 $scope.arra=[];$scope.arra1=[];$scope.arra2=[];
		 $scope.arrb=[];$scope.arrb1=[];$scope.arrb2=[];
		 $scope.arrc=[];$scope.arrc1=[];$scope.arrc2=[];
		 $scope.arrd=[];$scope.arrd1=[];$scope.arrd2=[];
		 $scope.arre=[];$scope.arre1=[];$scope.arre2=[];
		$scope.la1 = ""; $scope.shua1=""; $scope.shua2="";
		$scope.la2 = ""; $scope.shub1=""; $scope.shub2="";
		$scope.la3 = ""; $scope.shuc1=""; $scope.shuc2="";
		$scope.la4 = ""; $scope.shud1=""; $scope.shud2="";
		$scope.la5 = ""; $scope.shue1=""; $scope.shue2="";
		$scope.gogo = function() {
			$state.go("homepage")
		}

		$http({
			url: "http://" + ip + "/leave/?uid="+localStorage.loid,
			method: "get",
		}).then(function(e) {
			$scope.la2 = "请假"
			$scope.arra = e.data;
			for(var i=0;i<$scope.arra.length;i++){
				 if($scope.arra[i].status==1){
				 	$scope.d=true;
				 	$scope.arra1.push($scope.d)
				 	$scope.shub1=$scope.arra1.length;
				 }else if($scope.arra[i].status==0){
				 	$scope.c=true;
				 	$scope.arra2.push($scope.c)
				 	$scope.shub2=$scope.arra2.length;
				 }
			}

		})
		
		$http({
			url: "http://" + ip + "/apply-for/?uid="+localStorage.loid,
			method: "get",
		}).then(function(e) {
			$scope.la1 = "报销"
			$scope.arrb = e.data;
			for(var i=0;i<$scope.arrb.length;i++){
				 if($scope.arrb[i].status==1){
				 	$scope.b=true;
				 	$scope.arrb1.push($scope.b)
				 	$scope.shua1=$scope.arrb1.length;
				 }else if($scope.arrb[i].status==0){
				 	$scope.a=true;
				 	$scope.arrb2.push($scope.a)
				 	$scope.shua2=$scope.arrb2.length;
				 }
			}
		})
		
		$http({
			url: "http://" + ip + "/businesstrip/?uid="+localStorage.loid,
			method: "get",
		}).then(function(e) {
			$scope.la3 = "出差"
			$scope.arrc = e.data;
			for(var i=0;i<$scope.arrc.length;i++){
				 if($scope.arrc[i].status==1){
				 	$scope.f=true;
				 	$scope.arrc1.push($scope.f)
				 	$scope.shuc1=$scope.arrc1.length;
				 }else if($scope.arrc[i].status==0){
				 	$scope.e=true;
				 	$scope.arrc2.push($scope.e)
				 	$scope.shuc2=$scope.arrc2.length;
				 }
			}

		})
		
		
			$http({
			url: "http://" + ip + "/vacation/?uid="+localStorage.loid,
			method: "get",
		}).then(function(e) {
			$scope.la4 = "调休"
			$scope.arrd = e.data;
			for(var i=0;i<$scope.arrc.length;i++){
				 if($scope.arrd[i].status==1){
				 	$scope.h=true;
				 	$scope.arrd1.push($scope.h)
				 	$scope.shud1=$scope.arrd1.length;
				 }else if($scope.arrc[i].status==0){
				 	$scope.g=true;
				 	$scope.arrd2.push($scope.g)
				 	$scope.shud2=$scope.arrd2.length;
				 }
			}

		})
		
		
		
			$http({
			url: "http://" + ip + "/transfer/?uid="+localStorage.loid,
			method: "get",
		}).then(function(e) {
			$scope.la5 = "职位调动"
			$scope.arre = e.data;
			for(var i=0;i<$scope.arre.length;i++){
				 if($scope.arre[i].status==1){
				 	$scope.j=true;
				 	$scope.arre1.push($scope.j)
				 	$scope.shue1=$scope.arre1.length;
				 }else if($scope.arre[i].status==0){
				 	$scope.i=true;
				 	$scope.arre2.push($scope.i)
				 	$scope.shue2=$scope.arre2.length;
				 }
			}

		})
}
	});