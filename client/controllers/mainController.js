myApp.controller('mainController', function($scope, addFactory, mainFactory){

	mainFactory.getAllAisles(function(data){
		// console.log("aisles: ", data[0]._items);
		$scope.categories = data;

		var products = [];

		for(var i=0; i< data.length; i++){
			for(var k=0; k < data[i]._items.length; k++){
				products.push(data[i]._items[k]);
			}
		}
		// console.log(products);
		$scope.all = products;
	})

	$scope.productDetail = function(id,img, name, price, unit){
		$scope.product_detail_id=id;
		$scope.product_detail_img = img;
		$scope.product_detail_name = name;
		$scope.product_detail_price = price;
		$scope.product_detail_unit = unit;
	}

	$scope.test = function(){
		console.log("Test came throught!");
	}

	$scope.show = function(aisle){
		console.log(aisle);
		$scope.prod_name = aisle;
	}

	$scope.reset = function(){
		$scope.prod_name = "";
	}

	$scope.addToCart = function(id){
		// console.log($scope.order.amount, id, $scope.product_detail_price);
		var order = {
			amount: $scope.order.amount,
			_item: id,
			tot: Math.round($scope.product_detail_price * $scope.order.amount*100)/100
		}
		mainFactory.addToCart(order, function(data){
			console.log(data);
			$scope.order = {};
		})
	}
	
})