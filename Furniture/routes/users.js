var express = require('express');
//后端路由，用于分配前端的请求
var router = express.Router();

// const { getMd5 } = require('../Dao/crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.use(express.static(__dirname + '/public'));

const { login, isAccess, register, getUserInfo, getOrdersList } = require('../Service/usersService');
const { usersModel } = require("../Dao/model/usersModel")
const { goodsModel } = require("../Dao/model/goodsModel");

/* GET users listing. */
router.get('/login', function (req, res, next) {
  res.sendFile(__dirname + '/public/login.html');
});

//用于展示注册界面的路由
router.get('/register', async function (req, res, next) {
  res.sendFile(__dirname + '/public/register.html');
});


//登录
router.post('/login', async function (req, res, next) {
  const { username, password } = req.body;
  //md5
  // const newPassword = getMd5(password);
  //bcrypt
  const { data } = await login({ username });
  const isLogin = bcrypt.compareSync(password, data[0].password);
  if (isLogin) {
    //生成token
    const token = jwt.sign(
      { username },  //需要保存的用户信息
      'secret',//密钥字符串
      { expiresIn: 604800 } //设置token有效期，单位s
    )
    res.send({
      message: '登录成功',
      status: 1,
      token,
      username
    })
  } else {
    res.send({
      message: '登录失败',
      status: 0
    })
  }
});

//是否登录
router.get('/isLogin', async (req, res) => {
  //获取token
  const headersToken = req.get('Authorization');
  const token = headersToken.split(' ')[1];
  //解码token,拿到用户信息
  const { username } = jwt.verify(token, 'secret');
  res.send({
    message: '身份认证通过',
    status: 1,
    data: username
  })
})

//加入购物车
router.post('/addCart', async function (req, res) {
  //获取token
  const headersToken = req.get('Authorization');
  const token = headersToken.split(' ')[1];
  //解码token,拿到用户信息
  const { username } = jwt.verify(token, 'secret');
  const goods_id = req.body.goods_id;
  usersModel.findOne({ username: username }, function (err, usersModelDoc) { //查询对应用户信息
    if (err) {
      res.json({
        status: 0,
        msg: err.message
      });
    } else {
      if (usersModelDoc) {
        const data = usersModelDoc.cartList
        console.log(data)
        let inCart = false;
        usersModelDoc.cartList.forEach(function (item) {//遍历cartList比对商品id
          if (item.goods_id == goods_id) {    //若商品在购物车内，数量增加
            console.log(item.goods_id)
            inCart = true;
            item.num++;
            saveDoc(usersModelDoc, res);
          }
          // console.log(item.goods_id)
        });
        //所选商品不在购物车内，则从商品列表内查找并添加到购物车
        if (!inCart) {
          goodsModel.findOne({ goods_id: goods_id }, (err, goodsData) => {
            if (err) {
              res.json({
                status: 0,
                msg: err.message
              })
            } else {
              goodsData.checked = true;
              goodsData.num = 1;
              data.push(goodsData);//将商品插入到用户cartList数组内
              // console.log(usersModelDoc.cartList);
              saveDoc(usersModelDoc, res);
            }
          });
        }
      }
    }
    // console.log(usersModelDoc.cartList)
  })
  function saveDoc(doc, res) {
    //保存操作
    doc.save((err, doc) => {
      if (err) {
        res.json({
          status: 0,
          msg: err.message
        })
      } else {
        res.json({
          status: 1,
          msg: "添加购物车成功",
          result: 'success'
        })
      }
    })
  }
})

//判断用户名是否存在
router.post('/isAccess', async function (req, res, next) {
  const { username } = req.body;
  const data = await isAccess(username);//接收第二层的结果
  res.send(data);//返回给前端
});

//注册
router.post('/register', async function (req, res, next) {
  const { username, password, email } = req.body;
  const newPassword = bcrypt.hashSync(password, 10);
  // const user = req.body;
  const data = await register({ username, password: newPassword, email });
  res.send(data);
});

//获取用户信息
router.get('/getUserInfo', async function (req, res) {
  //获取token
  const headersToken = req.get('Authorization');
  const token = headersToken.split(' ')[1];
  //解码token,拿到用户信息
  const { username } = jwt.verify(token, 'secret');
  const infoData = await getUserInfo(username);
  res.send(infoData)
  // console.log(infoData)
})

router.get('/getOrdersList', async function (req, res) {
  //获取token
  const headersToken = req.get('Authorization');
  const token = headersToken.split(' ')[1];
  //解码token,拿到用户信息
  const { username } = jwt.verify(token, 'secret');
  const ordersData = await getOrdersList(username);
  res.send(ordersData)
  console.log(ordersData)
})


module.exports = router;
