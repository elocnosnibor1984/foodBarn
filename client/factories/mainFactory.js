myApp.factory('mainFactory', function($http){


	var dummies = []

	var factory = {}

	factory.getAllAisles = function(callback){
		$http.get('/all_aisles').then(function(data){
			callback(data.data);
		});
	}

	factory.addToCart = function(order, callback){
		$http.post('/order', order).then(function(data){
			callback(data.data);
		})
	}

	return factory;
})