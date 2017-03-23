'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */
angular.module('teamGroupApp')
	.controller('applyforCtrl', function($scope, $http,$state) {
		$scope.arr = [];
		$http({
			url: "http://" + ip + "/users/" + localStorage.loid,
			method: "get",

		}).then(function(tada) {
			//console.log(tada)
			$scope.arr = tada.data;
			sessionStorage.xingming = tada.data.xingming;
			sessionStorage.tel = tada.data.tel;
			sessionStorage.zhiwei = tada.data.zhiwei;

		})
		$scope.send = function() {
			if($('#xm').val() == '' || $('#yf').val() == '' || $('#rq').val() == '' || $('#je').val() == '') {
				alert("请将信息填写完整")
			} else {

				$http({
					url: "http://" + ip + "/apply-for",
					method: "post",
					data: {
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

			}
		}
		$scope.fh = function(){
			$state.go("homepage");
		}
		$scope.noSend = function(){
			$state.go("homepage");
		}
	});