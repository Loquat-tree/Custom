const { login, isAccess, isRegister, register, cart, getUserInfo, getOrdersList } = require('../Dao/usersDao')

module.exports.login = async function (user) {
  // const { username, password } = req.body;
  //调用第三层的usersDao.js的login方法
  const data = await login(user);
  if (data.length > 0) {
    return {
      message: '登录成功',
      status: 1,
      data
    }
  } else {
    return {
      message: '登录失败',
      status: 0
    }
  }
}

module.exports.isAccess = async function (username) {
  const data = await isAccess(username);
  if (data.length > 0) {
    return {
      message: '账号已存在',
      status: 0
    }
  } else {
    return {
      message: '账号合法',
      status: 1
    }
  }
}

module.exports.isRegister = async function (email) {
  const data = await isRegister(email);
  if (data.length > 0) {
    return {
      message: '邮箱已存在',
      status: 0
    }
  } else {
    return {
      message: '邮箱合法',
      status: 1
    }
  }
}

module.exports.register = async user => {//接收第一层的user数据
  //传给第三层
  const data = await register(user);
  if (data._id) {
    return {
      message: '注册成功',
      status: 1
    }
  } else {
    return {
      message: '注册失败',
      status: 0
    }
  }
}

// module.exports.addCart = async function(username){
//   const data = await addCart(username);
// }

// module.exports.cart = async function (goods_id) {
//   const goodsData = await cart(goods_id);
//   return goodsData
// }

module.exports.getUserInfo = async function (username) {
  const infoData = await getUserInfo(username);
  if (infoData) {
    return {
      message: '用户数据获取成功',
      status: 1,
      infoData
    }
  }
}

module.exports.getOrdersList = async function (username) {
  const ordersData = await getOrdersList(username);
  if (ordersData) {
    return {
      message: '订单列表数据获取成功',
      status: 1,
      ordersData
    }
  }
}