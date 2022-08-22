
//1.定义数据集合的结构:定义出集合中数据有哪些属性，属性的值是什么类型
const mongoose = require('mongoose');
//2.定义数据集合的模型,将schema和数据库中的集合关联起来
//model('模型名称',usersSchema,'数据库中的集合名称');
const codeSchema = new mongoose.Schema({
    uemail: String,
    ucode: String,
    currentTime: Date
}, { versionKey: false });
const codeModel = mongoose.model('codeModel', codeSchema, 'emailCode');

// 将数据模型暴露出去
module.exports.codeModel = codeModel;