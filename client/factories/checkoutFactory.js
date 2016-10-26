myApp.factory('checkoutFactory', function($http){


	var dummies = []

	var factory = {}

	factory.getOrders = function(callback){
		$http.get('/order').then(function(data){
			callback(data.data);
		});
	}

	factory.clearOrders = function(callback){
		$http.get('/clear_orders').then(function(data){
			callback(data.data);
		});
	}

	factory.update_amount = function(update, callback){
		$http.post('/update_amount', update).then(function(data){
			callback(data.data);
		});
	}

	return factory;
})