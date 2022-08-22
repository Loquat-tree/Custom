
//1.定义数据集合的结构:定义出集合中数据有哪些属性，属性的值是什么类型
const mongoose = require('mongoose');
//2.定义数据集合的模型,将schema和数据库中的集合关联起来
//model('模型名称',ordersSchema,'数据库中的集合名称');
const ordersSchema = new mongoose.Schema({
    goods_name: String, // 或者 'userId':{type:String}
    username: String,
    addr: String,
    phone: String,
    order_time: Date,
    order_count: Number,
    addr: String,
    sub_price: Number,
    goods_desc: String,
    goods_pic:String,
    price:Number
    // telephone:String,

}, { versionKey: false });
const ordersModel = mongoose.model('ordersModel', ordersSchema, 'orders');

// 将数据模型暴露出去
module.exports.ordersModel = ordersModel;