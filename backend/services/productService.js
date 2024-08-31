const Product = require("../../models/Product");

exports.createProduct = (product) => {
    Product.crete(product);
}
