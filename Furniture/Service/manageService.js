const { adminLogin, getUsers, addUsers, deleteUsers, searchUsers, getUpdateUsers, updateUsers, getGoods, addGoods, deleteGoods, getUpdateGoods, updateGoods, addStock, reduceStock, searchGoods,
    getOrders, deleteOrders, searchOrders, getUpdateOrders, updateOrders } = require('../Dao/manageDao')


module.exports.adminLogin = async function (admin) {
    //调用第三层的usersDao.js的adminLogin方法
    const data = await adminLogin(admin);
    if (data.length > 0) {
        return {
            message: '登录成功',
            status: 1
        }
    } else {
        return {
            message: '登录失败',
            status: 0
        }
    }
}

module.exports.getUsers = async (params) => {
    //根据参数进行判断
    //进入if，则表示searchValue有值，说明是在获取部分学生
    if (params.searchValue) {
        const usersData = await searchUsers(params);
        return {
            message: '用户数据查询成功',
            status: 1,
            usersData
        }
    } else {
        try {
            //进入else，则表示searchValue没有值，说明是在获取所有用户信息
            const usersData = await getUsers(params);
            return {
                message: '用户数据获取成功',
                status: 1,
                usersData
            }
        } catch (error) {
            console.log('error', error);
            return {
                message: '用户数据获取失败',
                status: 0
            }
        }
    }
}

module.exports.addUsers = async user => {
    const addData = await addUsers(user);
    if (addData._id) {
        return {
            msg: '用户数据增加成功',
            status: 1
        }
    } else {
        return {
            msg: '用户数据增加失败',
            status: 0
        }
    }
}

module.exports.deleteUsers = async _id => {
    const deleteData = await deleteUsers(_id);
    if (deleteData) {
        return {
            message: '删除成功',
            status: 1
        }
    } else {
        return {
            message: '删除失败',
            status: 0
        }
    }
}

module.exports.getUpdateUsers = async _id => {
    const getUpdateData = await getUpdateUsers(_id);
    if (getUpdateData) {
        return {
            message: '需修改的用户数据获取成功',
            status: 1,
            getUpdateData
        }
    }
}

module.exports.updateUsers = async user => {
    const updateData = await updateUsers(user);
    if (updateData) {
        return {
            message: '用户数据修改成功',
            status: 1,
            updateData
        }
    } else {
        return {
            message: '用户数据修改失败',
            status: 0
        }
    }

}

module.exports.getGoods = async (params) => {
    //根据参数进行判断
    //进入if，则表示searchValue值，说明是在获取所有学生
    if (params.searchValue) {
        const goodsData = await searchGoods(params);
        return {
            message: '产品数据查询成功',
            status: 1,
            goodsData
        }
    } else {
        try {
            //进入else，则表示searchValue没有值，说明是在获取部分用户信息
            const goodsData = await getGoods(params);
            return {
                message: '产品数据获取成功',
                status: 1,
                goodsData
            }
        } catch (error) {
            console.log('error', error);
            return {
                message: '产品数据获取失败',
                status: 0
            }
        }
    }
}

module.exports.addGoods = async goods => {
    const addData = await addGoods(goods);
    if (addData._id) {
        return {
            msg: '用户数据增加成功',
            status: 1
        }
    } else {
        return {
            msg: '用户数据增加失败',
            status: 0
        }
    }
}

module.exports.deleteGoods = async _id => {
    const deleteData = await deleteGoods(_id);
    if (deleteData) {
        return {
            message: '删除成功',
            status: 1
        }
    } else {
        return {
            message: '删除失败',
            status: 0
        }
    }
}

module.exports.getUpdateGoods = async _id => {
    const getUpdateData = await getUpdateGoods(_id);
    if (getUpdateData) {
        return {
            message: '需修改的用户数据获取成功',
            status: 1,
            getUpdateData
        }
    }
}

module.exports.updateGoods = async goods => {
    const updateData = await updateGoods(goods);
    if (updateData) {
        return {
            message: '用户数据修改成功',
            status: 1,
            updateData
        }
    } else {
        return {
            message: '用户数据修改失败',
            status: 0
        }
    }
}

module.exports.addStock = async goods_id => {
    const addStockData = await addStock(goods_id);
    if (addStockData) {
        return {
            msg: '库存数量增加成功',
            status: 1,
            addStockData
        }
    } else {
        return {
            msg: '库存数量增加失败',
            status: 0
        }
    }
}

module.exports.reduceStock = async goods_id => {
    const reduceStockData = await reduceStock(goods_id);
    if (reduceStockData) {
        return {
            msg: '库存数量减少成功',
            status: 1,
            reduceStockData
        }
    } else {
        return {
            msg: '库存数量减少失败',
            status: 0
        }
    }
}

module.exports.getOrders = async (params) => {
    //根据参数进行判断
    //进入if，则表示searchValue值，说明是在获取所有学生
    if (params.searchValue) {
        const ordersData = await searchOrders(params);
        return {
            message: '订单数据查询成功',
            status: 1,
            ordersData
        }
    } else {
        try {
            //进入else，则表示searchValue没有值，说明是在获取部分用户信息
            const ordersData = await getOrders(params);
            return {
                message: '订单数据获取成功',
                status: 1,
                ordersData
            }
        } catch (error) {
            console.log('error', error);
            return {
                message: '订单数据获取失败',
                status: 0
            }
        }
    }
}

module.exports.deleteOrders = async _id => {
    const deleteData = await deleteOrders(_id);
    if (deleteData) {
        return {
            message: '删除成功',
            status: 1
        }
    } else {
        return {
            message: '删除失败',
            status: 0
        }
    }
}

module.exports.getUpdateOrders = async _id => {
    const getUpdateData = await getUpdateOrders(_id);
    if (getUpdateData) {
        return {
            message: '需修改的用户数据获取成功',
            status: 1,
            getUpdateData
        }
    }
}

module.exports.updateOrders = async orders => {
    const updateData = await updateOrders(orders);
    if (updateData) {
        return {
            message: '订单数据修改成功',
            status: 1,
            updateData
        }
    } else {
        return {
            message: '订单数据修改失败',
            status: 0
        }
    }
}