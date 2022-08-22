const { goodsModel } = require('./model/goodsModel')
const { usersModel } = require('./model/usersModel')

module.exports.getGoods = async function (username) {
    // //获取数据总条数
    // const total = await goddsModel.countDocuments();
    // //计算总页数
    // const pages = Math.ceil(total / pageSize);
    // console.log(username)
    const goodsData = await usersModel.find({ username: username });
    return goodsData
    // .find()
    // .limit(pageSize - 0)//设置请求的数据条数
    // .skip((currentPage - 1) * pageSize)//跳过数据的条数
    // const usersData = await usersModel.find();

    // return {
    //     total, pages, goodsData
    // }
}

// module.exports.goodsInfo = async (goods_id) => {
//     return await goodsModel.find(goods_id);
// }

module.exports.getUsers = async () => {
    user_id = await usersModel.find(user_id);
    return user_id
}               