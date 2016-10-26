myApp.controller('updateController', function($scope, addFactory){

	$scope.getAisleUpdate = function(){
		console.log("aisle: ", $scope.findAisle.name);
		addFactory.getAisleUpdate($scope.findAisle, function(data){
			console.log("aisle: ", data);
			$scope.aisle = data[0];
		})
	}
	

	$scope.updateItem = function(id, name, price, img, unit){
		var update = {
			_id: id,
			name: name,
			price: price,
			img: img,
			unit: unit
		};

		addFactory.updateItem(update, function(data){
		console.log(data);
		});
	}
	
})