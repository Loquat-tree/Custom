const { getGoods, getUsers, goodsInfo } = require('../Dao/goodsDao');

module.exports.getGoods = async function (username) {
    const goodsData = await getGoods(username)
    
    // const goodsData = await getGoods(username) 
    // return goodsData
}

// module.exports.goodsInfo = async function (goods_id) {
//     const goodsModelDoc = await goodsInfo(goods_id);
//     return goodsModelDoc;
// }

module.exports.getUsers = async function (user_id) {
    const userData = await getUsers(user_id);
}