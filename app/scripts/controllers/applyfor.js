'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */
angular.module('teamGroupApp')
  .controller('applyforCtrl',function($scope,$http){
	$scope.arr = [];
	$http({
			url:"http://"+ip+"/users/"+localStorage.loid,

			method:"get",
			
		}).then(function(tada){
			//console.log(tada)
			$scope.arr = tada.data;
		})
	$scope.send = function(){
		if($scope.coms ==''||$scope.money ==''||$scope.months == ''|| $scope.date == ''){
				alert("请将信息填写完整")
			}else{
				
		$http({	
			url:"http://"+ip+"/apply-for",
			method:"post",
			data:{
				xiangmumingcheng:$scope.coms,
				jine:$scope.money,
				yuefen:$scope.months,
				shijian:$scope.date,
				status:1,
				uid:localStorage.loid
			}
		}).then(function(data){
			//console.log(data)
			$scope.coms = '';
			$scope.money = '';
			$scope.months = '';
			$scope.date = '';
		})
	
			}	
			}
  });
		