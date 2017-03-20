'use strict';

/**
 * @ngdoc overview
 * @name teamGroupApp
 * @description
 * # teamGroupApp
 *
 * Main module of the application.
 */
angular
  .module('teamGroupApp', ['ui.router']).config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
  	$stateProvider.state("login",{
  		url:"/login",
  		templateUrl:"views/login.html"
  	})

	.state("boss",{
  		url:"/boss",
  		templateUrl:"views/boss.html"
  	})
  	
  	.state("staff",{
  		url:"/staff",
  		templateUrl:"views/staff.html"
  	})
  	
  	.state("add",{
  		url:"/add",
  		templateUrl:"views/add.html"
  	})
  	
  	.state("applyfor",{
  		url:"/applyfor",
  		templateUrl:"views/applyfor.html"
  	})
  	
  	.state("vacation",{
  		url:"/vacation",
  		templateUrl:"views/vacation.html"
  	})
  	
  	.state("homepage",{
  		url:"/homepage",
  		templateUrl:"views/homepage.html"
  	})
  	
  	.state("leave",{
  		url:"/leave",
  		templateUrl:"views/leave.html"
  	})
  	
  	.state("transfer",{
  		url:"/transfer",
  		templateUrl:"views/transfer.html"
  	})
  	
  	.state("businesstrip",{
  		url:"/businesstrip",
  		templateUrl:"views/businesstrip.html"
  	})
  	
	$urlRouterProvider.otherwise("/login");
	
  }]);
