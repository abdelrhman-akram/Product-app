const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
    // _id : {type: String ,required : false},
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
});

// Export the model
module.exports = mongoose.model('Product', ProductSchema);
