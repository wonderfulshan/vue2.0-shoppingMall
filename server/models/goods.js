var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//每个schema会映射到mongodb中的一个collection，它不具备操作数据库的能力
var productSchema = new Schema({
    "productId":String,
    "productName":String,
    "salePrice":Number,
    "productNum":Number,
    "checked":String,
    "productImage":String
});
//model是由schema生成的模型，可以对数据库的操作
module.exports = mongoose.model('Good', productSchema);