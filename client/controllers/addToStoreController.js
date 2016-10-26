myApp.controller('addToStoreController', function($scope, addFactory){
	
	addFactory.getAisles(function(data){
		console.log("aisles: ", data);
		$scope.itemAisles = data;
	})

	$scope.addAisle = function(){
		addFactory.addAisle($scope.aisle, function(data){
		// console.log(data);
		$scope.aisle = {};
	})
	}

	$scope.addItem = function(){
		console.log($scope.item);
		addFactory.addItem($scope.item, function(data){
		console.log(data);
		$scope.item = {};
	})
	}
	
})