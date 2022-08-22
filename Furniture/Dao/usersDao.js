const { goodsModel } = require('./model/goodsModel');
const { usersModel } = require('./model/usersModel')
const { ordersModel } = require('./model/ordersModel')

module.exports.login = async function (user) {
    const data = await usersModel.find(user);
    return data;
}

module.exports.isAccess = async function (username) {
    const data = await usersModel.find({ username: username });
    return data;
}

module.exports.isRegister = async function (email) {
    const data = await usersModel.find({ email: email });
    return data;
}

module.exports.register = async user => {
    return await usersModel.create(user);
}

module.exports.cart = async function (goods_id) {
    return await goodsModel.find({ goods_id });
}
// module.exports.addCart = async function (username) {
//     const cartData = await usersModel.updateOne({ username: username },{$inc:{goods_name:goods_name},},{upsert:true});
//     return data;
// }

// module.exports.cart = async function (goods_id) {
//     return await goodsModel.find({ goods_id });
// }

module.exports.getUserInfo = function (username) {
    return usersModel.find({ username: username })
}

module.exports.getOrdersList = function (username) {
    return ordersModel.find({ username: username })
}