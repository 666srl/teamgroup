'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */
angular.module('teamGroupApp')
	//路由
	.controller('applyforCtrl', function($scope, $http, $state) {
	if(localStorage.loid == undefined){
		$state.go("login");
  }else{
		$scope.arr = [];
		$http({
			//从loid获取
			url: "http://" + ip + "/users/" + localStorage.loid,
			method: "get",

		}).then(function(tada) {
			//console.log(tada)
			//获取到的姓名，电话，职位
			$scope.arr = tada.data;
			sessionStorage.xingming = tada.data.xingming;
			sessionStorage.tel = tada.data.tel;
			sessionStorage.zhiwei = tada.data.zhiwei;

		})
		$scope.xs = function() {
			//判断数字弹框
			$scope.wz = false;
			$scope.sz = false;
		}
		$scope.wz = false;
		$scope.sz = false;
		//点击事件
		$scope.send = function() {
			//判断input是否为空
			if($('#xm').val() == '' || $('#yf').val() == '' || $('#rq').val() == '' || $('#je').val() == '') {

				$scope.wz = true;

			} else {
				//input只能是数字
				var oN1 = $('#rq').val();
				var oN2 = $('#je').val();
				var z = /^[0-9]*$/;
				var q =/^((0?[1-9])|((1|2)[0-9])|30|31)$/
				
				if( z.test(oN2) && q.test(oN1)) {

					$http({
						//发后台
						url: "http://" + ip + "/apply-for",
						method: "post",
						data: {
							//所有值
							xiangmumingcheng: $('#xm').val(),
							jine: $('#je').val(),
							yuefen: $('#yf').val(),
							shijian: $('#rq').val(),
							status: 1,
							uid: localStorage.loid,
							xingming: sessionStorage.xingming,
							tel: sessionStorage.tel,
							zhiwei: sessionStorage.zhiwei,

						}
					}).then(function(data) {

						//console.log(data)
						$scope.coms = '';
						$scope.money = '';
						$scope.months = '';
						$scope.date = '';
						$state.go("homepage");
					})

				} else {

					$scope.sz = true;

				}

			}
		}

		$scope.jiantou = function() {

			$state.go("homepage");

		}
		$scope.noSend = function() {

			$state.go("homepage");

		}
	}	
	});