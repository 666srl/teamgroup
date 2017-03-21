'use strict';

/**
 * @ngdoc function
 * @name teamGroupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teamGroupApp
 */
angular.module('teamGroupApp')
  .controller('businesstripCtrl',function($scope,$http){
  	$http({
  		url:'http://'+ip+'/users',
  		method:'get'
  	}) 
  	.then(function(rep){
  		console.log(rep)
  	},function(error){
  		alert('请求失败')
  	})
  });
