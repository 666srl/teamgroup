'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */

   angular.module('teamGroupApp')
  .controller('addCtrl', function($scope,$http,$state){  
  	$('.ss')[0].addEventListener("change",function(){
        var file = this.files[0];  
        console.log(file)
        var reader = new FileReader();   
        reader.readAsDataURL(file);   
        reader.onload = function(e){ 
        	console.log(this.result);
        	$('.pic').html('<img src="'+this.result+'">')
        console.log(this.result); //就是base64  
       $scope.to = this.result;
		}   
  },false)	
  	$scope.g = false;
  	$scope.gg = true;
  	$scope.f = true;
  	$scope.ts = false;
  	$scope.arr =[];
  	$scope.text1="asd"
  	$scope.xuigai = function(e,b){//修改
  		$scope.i=b
  		$scope.g = true;
  	$scope.jgr=true
  	$scope.gg = false;
  	$scope.abc=e
  	}
  	$scope.qa = function(){
  		$scope.ts = false;
  	}
  	$scope.fn=function(e){
  		$http({
  			url:"http://"+ip+"/users/"+e,
  			method:"put",
  			data:$scope.abc
  		}).then(function(){
  			
  			$scope.jgr=false
  			$scope.gg=true
  			$scope.i=-1;
  		})
  	}
	$http({
		 		url:"http://"+ip+"/users",
		 		method:"get",
		 	}).then(function(data){
		 		console.log(data)
		 		$scope.arr =data.data;
		 		
		 	})
    $scope.x = false;
    $scope.qq = function(){
    	$scope.ts = true;
    }
  $scope.tj = function(){
  	                     //添加员工
  	                     if($scope.name ==""){
  	                     	alert(1)
  	                     }else{
  	                     	$http({    			
		 		url:"http://"+ip+"/users",
		 		method:"post",
		 		data:{
		 				username:$scope.user,
		 				bumen:$scope.bumen,
		 				didian:$scope.didian,
		 				password:$scope.pass,
		 				tel:$scope.tel,
		 				zhiwei:$scope.zhiwei,
		 				xingming:$scope.name,
		 				state:$scope.zhangtai,
		 				img:$scope.to,
		 		}
		 	}).then(function(data){
		 		console.log(data)

                $scope.arr.push(data.data)
		 		$scope.name=""
				$scope.zhiwei=""
				$scope.user=""
				$scope.pass=""
				$scope.tel=""
				$scope.bumen=""
				$scope.img = ""
				$scope.x = false;
				$scope.f = true;
		 	})
  	                     }
  	         	
  	         
  	                     		
  }
  
  
 
  $scope.sc = function(a,index){
  	                          //删除
  	$http({//user里的信息
		 		url:"http://"+ip+"/users/"+a,
		 		method:"delete",
		 }).then(function(data){	
		 	console.log(data)
		 	$scope.arr.splice(index,1);
		 	$scope.ts = false;	
		 	})
		 $http({//报销里的信息
		 		url:"http://"+ip+"/apply-for/"+a,
		 		method:"delete",
		 	}).then(function(data){
		 		console.log(data)

		 	})
			$http({//请假里的信息
		 		url:"http://"+ip+"/leave/"+a,
		 		method:"delete",
		 	}).then(function(data){
		 		console.log(data)
		 	})
		 	$http({//职位调动里的信息
		 		url:"http://"+ip+"/transfer/"+a,
		 		method:"delete",
		 	}).then(function(data){
		 		console.log(data)
		 	})
		 	$http({//调休里的信息
		 		url:"http://"+ip+"/vacation/"+a,
		 		method:"delete",
		 	}).then(function(data){
		 		console.log(data)
		 	})
		 	
		 	$http({//出差里的信息
		 		url:"http://"+ip+"/businesstrip/"+a,
		 		method:"delete",
		 	}).then(function(data){
		 		console.log(data)
		 	})
		  	
 }

  $scope.xs = function(){
  	$scope.x = true;
  	$scope.f = false;
  }
  $scope.qx = function(){
  	$scope.x = false;
  	$scope.f = true;
  	
  }
  $scope.jiantou = function(){
  	$state.go("homepage")
  }
  $scope.wc = function(a){ //完成
  		
	$http({
		 		url:"http://"+ip+"/users/"+a,
		 		method:"post",
		 		data:{
		 				zhiwei:$scope.zhiwei1,
		 				xingming:$scope.xingming,
		 				
		 		}
		 	}).then(function(data){
		 		console.log(data)
		 		
		 	})
		 	
		 	
		$scope.g = false;
  		$scope.gg = true;
  }

  });







