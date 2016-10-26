var mongoose = require('mongoose');
var aisleDB = mongoose.model('aisleDB');
var itemDB = mongoose.model('itemDB');
var userDB = mongoose.model('userDB');
var orderDB = mongoose.model('orderDB');

module.exports = (function() {
	return {
		addAisle: function(req, res){
			console.log(req.body, 'THIS IS REQ BODY-addList');
			aisle = new aisleDB(req.body);
			aisle.save(function(err, result){
				if(err){
					console.log(err);
					console.log('error creating a new aisle');
				} else {
					console.log('this is our new aisle',result);
					res.json(result);

				}
			})
		},

		order: function(req, res){
			console.log(req.body, 'THIS IS REQ BODY-addList');
			order = new orderDB(req.body);
			order.save(function(err, result){
				if(err){
					console.log(err);
					console.log('error creating a new aisle');
				} else {
					console.log('this is our new aisle',result);
					res.json(result);

				}
			})
		},

		getAllAisles: function(req, res){
			aisleDB.find({}).populate("_items").exec(function(err, aisles){
				if(err){
					console.log(err);
				} else {
					// console.log("Lists****",lists);
					res.json(aisles);
				}
			})
		},

		getOrder: function(req, res){
			orderDB.find({}).populate("_item").exec(function(err, orders){
				if(err){
					console.log(err);
				} else {
					// console.log("Lists****",lists);
					res.json(orders);
				}
			})
		},

		clearOrders: function(req, res){
			orderDB.remove({}, function(err){
				if(err){
					console.log(err);
				}
				else{
					res.json("dropped collection");
				}
			});
			
		},
		update_amount: function(req, res){
			console.log("update_amount: ", req.body);
			orderDB.findOne({_id: req.body._id}, function(err, order){
				if(err){
					console.log(err);
				}
				else{
					console.log("order: ", order);
					order.amount = req.body.amount;
					order.tot = req.body.total;
					order.save();
					res.json("dropped collection");
				}
			});
			
		},
	}
})();