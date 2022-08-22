const { usersModel } = require('./model/usersModel')
const { goodsModel } = require('./model/goodsModel')
const { adminModel } = require('./model/adminModel')
const { ordersModel } = require('./model/ordersModel')

module.exports.adminLogin = async function (admin) {
    const adminData = await adminModel.find(admin);
    return adminData;
}

//{ pageSize, currentPage }
module.exports.getUsers = async ({ pageSize, currentPage }) => {
    // console.log('333', pageSize, currentPage)
    //获取数据总条数
    const total = await usersModel.countDocuments();
    //计算总页数
    const pages = Math.ceil(total / pageSize);
    const usersData = await usersModel
        .find()
        .limit(pageSize - 0)//设置请求的数据条数
        .skip((currentPage - 1) * pageSize)//跳过数据的条数
    // const searchData = await usersModel.find({
    //     [params.searchType]: { $regex: params.searchValue, $options: '$i' }

    // });
    return {
        total, pages, usersData
    }
}

module.exports.addUsers = async user => {
    return await usersModel.create(user);
}

module.exports.deleteUsers = async _id => {
    return await usersModel.deleteOne(_id);
}

module.exports.getUpdateUsers = async ({ _id }) => {
    return await usersModel.findById(_id);
}

module.exports.getUpdateUsers = async ({ _id }) => {
    return await usersModel.findById(_id);
}

//user
module.exports.updateUsers = async ({ _id, username, gender, email, birthday, address, phone }) => {
    return await usersModel.updateOne({ _id }, { username, gender, email, birthday, address, phone });
    //{_id:user._id},user
}

module.exports.searchUsers = async (params) => {
    //模糊查询
    //空字符串能够匹配所有的正则
    const total = (await usersModel.find({
        [params.searchType]: { $regex: params.searchValue, $options: '$i' }
    })).length;
    console.log(total)
    const pages = Math.ceil(total / params.pageSize);
    const usersData = await usersModel.find({
        [params.searchType]: { $regex: params.searchValue, $options: '$i' }
    })
        .limit(params.pageSize - 0)//设置请求的数据条数
        .skip((params.currentPage - 1) * params.pageSize)//跳过数据的条数
    return {
        total, pages, usersData
    }
    // return usersData
}

module.exports.getGoods = async ({ pageSize, currentPage }) => {
    //获取数据总条数
    const total = await goodsModel.countDocuments();
    //计算总页数
    const pages = Math.ceil(total / pageSize);

    const goodsData = await goodsModel
        .find()
        .limit(pageSize - 0)//设置请求的数据条数
        .skip((currentPage - 1) * pageSize)//跳过数据的条数
    // const usersData = await usersModel.find();
    // return usersData;
    return {
        total, pages, goodsData
    }
}

module.exports.addGoods = async user => {
    return await goodsModel.create(user);
}

module.exports.deleteGoods = async _id => {
    return await goodsModel.deleteOne(_id);
}

module.exports.getUpdateGoods = async ({ _id }) => {
    return await goodsModel.findById(_id);
}

//user
module.exports.updateGoods = async ({ _id, username, gender, email, birthday, address, phone }) => {
    return await goodsModel.updateOne({ _id }, { username, gender, email, birthday, address, phone });
    //{_id:user._id},user
}

module.exports.searchGoods = async (params) => {
    //模糊查询
    //空字符串能够匹配所有的正则
    const total = (await goodsModel.find({
        [params.searchType]: { $regex: params.searchValue, $options: '$i' }
    })).length;
    console.log(total)
    const pages = Math.ceil(total / params.pageSize);
    const goodsData = await goodsModel.find({
        [params.searchType]: { $regex: params.searchValue, $options: '$i' }
    })
        .limit(params.pageSize - 0)//设置请求的数据条数
        .skip((params.currentPage - 1) * params.pageSize)//跳过数据的条数
    return {
        total, pages, goodsData
    }
}

module.exports.addStock = async ({ goods_id }) => {
    return await goodsModel.updateOne({ goods_id: goods_id }, { $inc: { stock: 1 } })
}

module.exports.reduceStock = async ({ goods_id }) => {
    return await goodsModel.updateOne({ goods_id: goods_id }, { $inc: { stock: - 1 } })
}

//获取订单列表
module.exports.getOrders = async ({ pageSize, currentPage }) => {
    //获取数据总条数
    const total = await ordersModel.countDocuments();
    //计算总页数
    const pages = Math.ceil(total / pageSize);

    const ordersData = await ordersModel
        .find()
        .limit(pageSize - 0)//设置请求的数据条数
        .skip((currentPage - 1) * pageSize)//跳过数据的条数
    // const usersData = await usersModel.find();
    // return usersData;
    return {
        total, pages, ordersData
    }
}

module.exports.deleteOrders = async _id => {
    return await ordersModel.deleteOne(_id);
}

module.exports.searchOrders = async (params) => {
    //模糊查询
    //空字符串能够匹配所有的正则
    const total = (await ordersModel.find({
        [params.searchType]: { $regex: params.searchValue, $options: '$i' }
    })).length;
    console.log(total)
    const pages = Math.ceil(total / params.pageSize);
    const ordersData = await ordersModel.find({
        [params.searchType]: { $regex: params.searchValue, $options: '$i' }
    })
        .limit(params.pageSize - 0)//设置请求的数据条数
        .skip((params.currentPage - 1) * params.pageSize)//跳过数据的条数
    return {
        total, pages, ordersData
    }
}

module.exports.getUpdateOrders = async ({ _id }) => {
    return await ordersModel.findById(_id);
}

//user
module.exports.updateOrders = async ({ _id, username, order_count, price, goods_name, address, phone }) => {
    return await ordersModel.updateOne({ _id }, { username, order_count, price, goods_name, address, phone });
    //{_id:user._id},user
}