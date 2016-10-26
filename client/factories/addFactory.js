myApp.factory('addFactory', function($http){

	var dummies = []

	var factory = {}

	factory.getAisles = function(callback){
		$http.get('/aisles').then(function(data){
			callback(data.data);
		});
	}

	factory.getAisleUpdate = function(update, callback){
		console.log("update", update.name);
		$http.get('/aisle/'+ update.name).then(function(data){
			callback(data.data);
		});
	}

	
	factory.addAisle = function(info, callback){
		// console.log("aisle: ", info);
		$http.post('/aisle', info).then(function(data){
			if(data.error){
				callback(data);
			} else {
				callback(data);
			}
		})
	}


	factory.addItem = function(info, callback){
		// console.log("aisle: ", info);
		$http.post('/item', info).then(function(data){
			if(data.error){
				callback(data);
			} else {
				callback(data);
			}
		})
	}

	factory.updateItem = function(info, callback){
		// console.log("aisle: ", info);
		$http.post('/update_item', info).then(function(data){
			if(data.error){
				callback(data);
			} else {
				callback(data);
			}
		})
	}

	return factory;
})