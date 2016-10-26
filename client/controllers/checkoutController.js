myApp.controller('checkoutController', function($scope, $location, checkoutFactory){
	checkoutFactory.getOrders(function(data){
		// console.log(data);
		var orders = [];
		var total = 0;
		$scope.show_edit = false;

		$scope.preMan = data;

		var someDate = new Date();
		var numberOfDaysToAdd = 6;
		someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 

		$scope.someDate = someDate;

		$scope.date = new Date();

		function Item() {
			this.id= 'null',
			this.name= 'null',
			this.amount= 0,
			this.tot= 0
		}
		for(var i = 0; i<data.length; i++){
			var new_item = new Item;
			new_item.id = data[i]._id;
			new_item.amount = data[i].amount;
			new_item.tot = data[i].tot;
			new_item.name = data[i]._item.name;
			new_item.price = data[i]._item.price;
			orders.push(new_item);
			total += data[i].tot;
		}

		$scope.orders = orders;
		$scope.total = total;
	});

	$scope.purchase = function(){
		console.log("purchase");
		checkoutFactory.clearOrders(function(data){
			$location.url('/purchase');
		});
	}

	$scope.edit = function(){
		$scope.show_edit = !$scope.show_edit;
	}

	$scope.backToCheckout = function(){
		checkoutFactory.getOrders(function(data){
		// console.log(data);
		var orders = [];
		var total = 0;
		$scope.show_edit = false;

		$scope.preMan = data;

		function Item() {
			this.id= 'null',
			this.name= 'null',
			this.amount= 0,
			this.tot= 0
		}
		for(var i = 0; i<data.length; i++){
			var new_item = new Item;
			new_item.id = data[i]._id;
			new_item.amount = data[i].amount;
			new_item.tot = data[i].tot;
			new_item.name = data[i]._item.name;
			new_item.price = data[i]._item.price;
			orders.push(new_item);
			total += data[i].tot;
		}

		$scope.orders = orders;
		$scope.total = total;
	});
		$scope.show_edit = !$scope.show_edit;
	}

	$scope.update_amount = function(id, amount, price){
		console.log("order update", id, update, price);
		console.log("updated amount: ", amount * price);
		var update = {
			_id: id,
			amount: amount,
			total: amount * price
		}
		checkoutFactory.update_amount(update, function(data){
			console.log(data);
		})
	}

	
})