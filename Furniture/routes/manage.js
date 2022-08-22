var express = require('express');
// const { removeData } = require('jquery');
//后端路由，用于分配前端的请求
var router = express.Router();

const { adminLogin, getUsers, addUsers, deleteUsers, getUpdateUsers, updateUsers, getGoods, addGoods, deleteGoods, getUpdateGoods, updateGoods, addStock, reduceStock,
    getOrders, deleteOrders, getUpdateOrders, updateOrders } = require('../Service/manageService');

const { uploadFiles } = require('../Utlis/handleFiles')

router.use(express.static(__dirname + '/public'));

//管理员登录
router.post('/adminLogin', async function (req, res, next) {
    const admin = req.body;  //假设前端传过来的数据是:{username:'123',password:'456'}
    const data = await adminLogin(admin);
    res.send(data);
});

//用户列表
router.get('/getUsers', async function (req, res, next) {
    const usersData = await getUsers(req.query);
    res.send(usersData);
})

//新增用户
router.post('/addUsers', async (req, res) => {
    const user = req.body;
    const addData = await addUsers(user);
    res.send(addData);
})

//删除用户信息
router.post('/deleteUsers', async function (req, res, next) {
    const deleteData = await deleteUsers(req.body);
    res.send(deleteData);
})

//获取需修改的用户信息
router.get('/getUpdateUsers', async function (req, res, next) {
    const getUpdateData = await getUpdateUsers(req.query);
    res.send(getUpdateData);
})
//修改用户信息
router.post('/updateUsers', async function (req, res, next) {
    const updateData = await updateUsers(req.body);
    res.send(updateData);
})

//产品列表
router.get('/getGoods', async function (req, res, next) {
    const goodsData = await getGoods(req.query);
    res.send(goodsData);
})

//新增产品
router.post('/addGoods', async (req, res) => {
    const goods = req.body;
    const addData = await addGoods(goods);
    res.send(addData);
})

router.post('/upload', async (req, res) => {
    const upload = uploadFiles({
        path: './public/img', // 设置上传成功后的图片存储路径
        key: 'file', // 与前端formData.append('file', files[0]);中的file相匹配
        size: 1000
    });
    upload(req, res, (err) => {
        if (err) {
            console.log('图片上传失败');
        } else {
            // console.log('图片上传成功', req.files);
            res.send({
                message: '图片上传成功',
                status: 1,
                data: req.files[0].filename
            })
        }
    })
})

//删除商品信息
router.post('/deleteGoods', async function (req, res, next) {
    const deleteData = await deleteGoods(req.body);
    res.send(deleteData);
})

//获取需修改的产品信息
router.get('/getUpdateGoods', async function (req, res, next) {
    const getUpdateData = await getUpdateGoods(req.query);
    res.send(getUpdateData);
})
//修改产品信息
router.post('/updateGoods', async function (req, res, next) {
    const updateData = await updateGoods(req.body);
    res.send(updateData);
})

//增加库存
router.post('/addStock', async function (req, res, next) {
    const addStockData = await addStock(req.body);
    res.send(addStockData)
})

//库存减少
router.post('/reduceStock', async function (req, res, next) {
    const reduceStockData = await reduceStock(req.body);
    res.send(reduceStockData)
})

//订单列表
router.get('/getOrders', async function (req, res, next) {
    const ordersData = await getOrders(req.query);
    res.send(ordersData);
    console.log(ordersData)
})

//删除订单信息
router.post('/deleteOrders', async function (req, res, next) {
    const deleteData = await deleteOrders(req.body);
    res.send(deleteData);
})

//获取需修改的订单信息
router.get('/getUpdateOrders', async function (req, res, next) {
    const getOrdersData = await getUpdateOrders(req.query);
    res.send(getOrdersData);
})
//修改订单信息
router.post('/updateOrders', async function (req, res, next) {
    const updateData = await updateOrders(req.body);
    res.send(updateData);
})

module.exports = router;