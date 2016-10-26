var myApp = angular.module('Myapp', ['ngRoute','ui.bootstrap']);

(function(){
	myApp.config(function($routeProvider){
		$routeProvider
			// .when('/', 
			// {
			// 	controller: 'indexController',
			// 	templateUrl: "partials/index.html"
			// })
			.when('/', 
			{
				controller: 'mainController',
				templateUrl: "partials/main.html"
			})
			.when('/checkout', 
			{
				controller: 'checkoutController',
				templateUrl: "partials/checkout.html"
			})
			.when('/purchase', 
			{
				controller: 'checkoutController',
				templateUrl: "partials/purchase.html"
			})
			.when('/add', 
			{
				controller: 'addToStoreController',
				templateUrl: "partials/addToStore.html"
			})
			.when('/update', 
			{
				controller: 'updateController',
				templateUrl: "partials/updateStore.html"
			})
	})
}());