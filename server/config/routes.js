var adminController = require('../controllers/admin.js');
var mainController = require('../controllers/main.js');

module.exports = function(app){

	app.post('/aisle', function(req, res){
		// console.log(req.body);
		adminController.addAisle(req, res);
	})
	app.post('/item', function(req, res){
		// console.log(req.body);
		adminController.addItem(req, res);
	})
	app.post('/update_item', function(req, res){
		// console.log(req.body);
		adminController.updateItem(req, res);
	})
	app.post('/order', function(req, res){
		// console.log(req.body);
		mainController.order(req, res);
	})
	app.post('/update_amount', function(req, res){
		// console.log(req.body);
		mainController.update_amount(req, res);
	})
	app.get('/order', function(req, res){
		// console.log(req.body);
		mainController.getOrder(req, res);
	})
	app.get('/clear_orders', function(req, res){
		// console.log(req.body);
		mainController.clearOrders(req, res);
	})
	app.get('/aisles', function(req, res){
		adminController.getAisles(req, res);
	})

	app.get('/aisle/:name', function(req, res){
		adminController.getAisleUpdate(req, res);
	})

	app.get('/all_aisles', function(req, res){
		mainController.getAllAisles(req, res);
	})
}