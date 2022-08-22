
//1.定义数据集合的结构:定义出集合中数据有哪些属性，属性的值是什么类型
const mongoose = require('mongoose');
//2.定义数据集合的模型,将schema和数据库中的集合关联起来
//model('模型名称',usersSchema,'数据库中的集合名称');
const goodsSchema = new mongoose.Schema({
    goods_id: String,
    goods_name: String,
    pic: String,
    price: Number,
    desc: String,
    stock: Number,
    checked: Boolean,
    type: String,
    num: Number
}, { versionKey: false });
const goodsModel = mongoose.model('goodsModel', goodsSchema, 'goods');

// 将数据模型暴露出去
module.exports.goodsModel = goodsModel;