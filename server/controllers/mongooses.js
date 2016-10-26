var mongoose = require('mongoose');
var aisleDB = mongoose.model('aisleDB');
var itemDB = mongoose.model('itemDB');
var userDB = mongoose.model('userDB');

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
	}
})();