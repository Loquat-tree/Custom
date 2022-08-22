
//1.定义数据集合的结构:定义出集合中数据有哪些属性，属性的值是什么类型
const mongoose = require('mongoose');

//2.定义数据集合的模型,将schema和数据库中的集合关联起来
//model('模型名称',adminSchema,'数据库中的集合名称');
const adminSchema = new mongoose.Schema({
    name: String,
    password: String,
}, { versionKey: false });

const adminModel = mongoose.model('adminModel', adminSchema, 'admin');

// 将数据模型暴露出去
module.exports.adminModel = adminModel;