var mongoose = require('mongoose');
var aisleDB = mongoose.model('aisleDB');
var itemDB = mongoose.model('itemDB');
var userDB = mongoose.model('userDB');

module.exports = (function() {
	return {
		addAisle: function(req, res){
			// console.log(req.body, 'THIS IS REQ BODY-addList');
			aisle = new aisleDB(req.body);
			aisle.save(function(err, result){
				if(err){
					console.log(err);
					console.log('error creating a new aisle');
				} else {
					// console.log('this is our new aisle',result);
					res.json(result);

				}
			})
		},

		addItem: function(req, res){
			console.log(req.body, 'THIS IS REQ BODY-addItem');
			item = new itemDB({name: req.body.name, _aisle: req.body.aisle._id, price: req.body.price, img: req.body.img, unit: req.body.unit});
			item.save(function(err, result){
				if(err){
					console.log(err);
					console.log('error creating a new aisle');
				} else {
					// console.log('this is our new aisle',result);
					aisleDB.findOne({_id: req.body.aisle._id}, function(err, aisle){
						if(err){
							console.log(err);
						}
						else{
							console.log("aisle", aisle);
							console.log("item_id: ", item._id);
							aisle._items.push(item._id);
							aisle.save();
							res.json(aisle);
						}
						})
					// res.json(result);

				}
			})
		},

		getAisles: function(req, res){
			aisleDB.find({}, function(err, aisles){
				if(err){
					console.log(err);
				} else {
					// console.log("Lists****",lists);
					res.json(aisles);
				}
			})
		},

		getAisleUpdate: function(req, res){
			console.log("req.params.name: ", req.params.name);
			aisleDB.find({name: req.params.name}).populate('_items').exec(function(err, aisle){
				if(err){
					console.log(err);
				} else {
					// console.log("Lists****",lists);
					res.json(aisle);
				}
			})
		},

		updateItem: function(req, res){
			itemDB.findOne({_id: req.body._id}, function(err, item){
				if(err){
					console.log(err);
				} else {
					item.name = req.body.name;
					item.price = req.body.price;
					item.img = req.body.img;
					item.unit = req.body.unit;
					console.log("item: ", item);
					item.save();
					res.json(item);
				}
			})

		},
	}
})();