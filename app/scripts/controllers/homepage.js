'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */
angular.module('teamGroupApp')
  .controller('homepageCtrl', function ($scope,$http,$state) {
  	$scope.jia = false;
  	$http({//+号的显隐
  			url:"http://"+ip+"/users/"+localStorage.loid,
  			method:"get"
  		}).then(function(e){
			console.log(e);
  			$scope.arr = e.data;
  			localStorage.zt = e.data.state;
  			if (e.data.state == '1') {
				$scope.jia = true;
  			}else {
  				$scope.jia = false;
  			}
  		})
  	
  	$scope.ts = function(){//news
  			if (localStorage.zt == '1') {
				$state.go("boss")
  			}else {
  				$state.go("staff")
  			}
  	}
  	
	$scope.num = 0;
  	$scope.srl = function(){//个人信息显隐
  		$scope.num++;
  		if ($scope.num%2 == 1) {
  			$(".srl-showtop").css("opacity",1).css("z-index","99");
  		} else{
  			$(".srl-showtop").css("opacity",0).css("z-index","-1");
  		}
  		$scope.arr = [];
  		$http({
  			url:"http://"+ip+"/users/"+localStorage.loid,
  			method:"get"
  		}).then(function(e){
//			console.log(e);
  			$scope.arr = e.data;
  		})
  	}
    $scope.tj = function(){ //添加
    	$state.go("add");
    }
    $scope.zw = function(){ //职位调动
    	$state.go("transfer");
    }
    $scope.qj = function(){ //请假
    	$state.go("leave")
    }
    $scope.bx = function(){ //报销
    	$state.go("applyfor")
    }
    $scope.cc = function(){ //出差
    	$state.go("businesstrip")
    }
    $scope.tx = function(){ //日常调休
    	$state.go("vacation")
    }
    
    $scope.back = function(){
    	localStorage.clear();
    	$state.go("login")
    }
    
    
    
    
    
    
    
  });
