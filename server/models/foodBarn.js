var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AisleSchema = new mongoose.Schema({
    name: String,
    _items:[{type: Schema.Types.ObjectId, ref: 'itemDB'}]
});

mongoose.model('aisleDB', AisleSchema);

var ItemSchema = new mongoose.Schema({
    name: String,
    _aisle:{type: Schema.Types.ObjectId, ref: 'aisleDB'},
    price: Number,
    img: String,
    unit: String
});

mongoose.model('itemDB', ItemSchema);

var OrderSchema = new mongoose.Schema({
    amount: Number,
    tot: Number,
    _item:{type: Schema.Types.ObjectId, ref: 'itemDB'}
});

mongoose.model('orderDB', OrderSchema);

var UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    zip: String,
});

mongoose.model('userDB', UserSchema);