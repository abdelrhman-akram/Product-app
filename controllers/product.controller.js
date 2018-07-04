const Product = require('../models/product.model');

 var ObjectId = require('mongodb').ObjectID;

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller! ');
};

exports.product_create = function (req, res) {
    let product = new Product(
        {
            // _id:req.body.name,
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

exports.product_details = function (req, res) {
    Product.findById({_id:ObjectId(req.params.id)}, function (err, product) {
        // res.send(req.params.id);
        if (err) {
          return next(err);
        }
        res.send(product);
    })
};
