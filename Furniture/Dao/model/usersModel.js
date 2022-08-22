
//1.定义数据集合的结构:定义出集合中数据有哪些属性，属性的值是什么类型
const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
//2.定义数据集合的模型,将schema和数据库中的集合关联起来
//model('模型名称',usersSchema,'数据库中的集合名称');
const usersSchema = new mongoose.Schema({
    user_id: String, // 或者 'userId':{type:String}
    username: String,
    password: String,
    gender: String,
    email: String,
    phone: String,
    birthday: String,
    ordersList: Array,
    cartList: [ // 购物车列表
        {
            "goods_id": String,
            "goods_name": String,
            "desc": String,
            "price": String,
            "pic": String,
            "checked": Boolean, // 是否选中
            "num": Number,// 商品数量
            "subPrice": String
        }
    ],
    address:String
    // telephone:String,

}, { versionKey: false });
const usersModel = mongoose.model('usersModel', usersSchema, 'users');

// 将数据模型暴露出去
module.exports.usersModel = usersModel;