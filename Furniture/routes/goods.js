var express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken');

// const { getGoods } = require('../Service/goodsService');
const { usersModel } = require("../Dao/model/usersModel")

router.use(express.static(__dirname + '/public'));

router.get('/getGoods', function (req, res) {

})

router.get('/getCart', function (req, res, next) {
    //获取token
    const headersToken = req.get('Authorization');
    const token = headersToken.split(' ')[1];
    //解码token,拿到用户信息
    const { username } = jwt.verify(token, 'secret');

    usersModel.findOne({ username: username }, function (err, usersModelDoc) { //查询对应用户信息
        if (err) {
            res.json({
                status: 0,
                msg: err.message
            });
        } else {
            if (usersModelDoc) {
                const goodsData = usersModelDoc.cartList
                console.log(goodsData)
                res.send({
                    status: '1',
                    msg: '',
                    goodsData
                })
            };
        }
    })
})

router.post('/addCount', function (req, res, next) {
    //获取token
    const headersToken = req.get('Authorization');
    const token = headersToken.split(' ')[1];
    //解码token,拿到用户信息
    const { username } = jwt.verify(token, 'secret');
    const { goods_id } = req.body;
    usersModel.findOne({ username: username }, function (err, usersModelDoc) { //查询对应用户信息
        const data = usersModelDoc.cartList;
        if (err) {
            res.json({
                status: 0,
                msg: err.message
            });
        } else {
            if (usersModelDoc) {
                data.forEach(function (item) {
                    if (item.goods_id == goods_id) {    //数量增加
                        item.num++;
                        saveDoc(usersModelDoc, res);
                    }
                });
            }
        }

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
                    msg: "添加成功",
                    result: 'success'
                })
            }
        })
    }
})

router.post('/reduceCount', function (req, res, next) {
    //获取token
    const headersToken = req.get('Authorization');
    const token = headersToken.split(' ')[1];
    //解码token,拿到用户信息
    const { username } = jwt.verify(token, 'secret');
    const { goods_id } = req.body;
    usersModel.findOne({ username: username }, function (err, usersModelDoc) { //查询对应用户信息
        const data = usersModelDoc.cartList;
        if (err) {
            res.json({
                status: 0,
                msg: err.message
            });
        } else {
            if (usersModelDoc) {
                data.forEach(function (item) {
                    if (item.goods_id == goods_id) {    //数量增加
                        if (item.num > 1) {
                            item.num--;
                            saveDoc(usersModelDoc, res);
                        } else {
                            res.send('至少选择1件,如果不需要,请直接删除')
                            //    return
                        }
                    }
                });
            }
        }
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
                    msg: "减少成功",
                    result: 'success'
                })
            }
        })
    }
})

router.post('/delCart', function (req, res) {
    //获取token
    const headersToken = req.get('Authorization');
    const token = headersToken.split(' ')[1];
    //解码token,拿到用户信息
    const { username } = jwt.verify(token, 'secret');
    const { goods_id } = req.body;
    usersModel.updateOne({ username: username }, {
        $pull: {
            cartList: { goods_id: goods_id }
        }
    }, function (err, usersModelDoc) { //查询对应用户信息
        // const data = usersModelDoc.cartList;
        if (err) {
            res.json({
                status: 0,
                msg: '删除失败'
            });
        } else {
            if (usersModelDoc) {
                res.json({
                    status: 1,
                    msg: '删除成功'
                });
            }
        }
    })

})

// router.get('/getCartInfo', function (req, res, next) {
//     //获取token
//     const headersToken = req.get('Authorization');
//     const token = headersToken.split(' ')[1];
//     //解码token,拿到用户信息
//     const { username } = jwt.verify(token, 'secret');
//     const { goods_id } = getCartInfo(req.query);
//     console.log(goods_id)
//     usersModel.findOne({ username: username }, function (err, usersModelDoc) { //查询对应用户信息
//         if (err) {
//             res.json({
//                 status: 0,
//                 msg: err.message
//             });
//         } else {
//             if (usersModelDoc) {
//                 usersModelDoc.cartList.forEach(function (item) {//遍历cartList比对商品id
//                     if (item.goods_id == goods_id) {


//                         // res.send({
//                         //     status: '1',
//                         //     msg: '',
//                         //     goodsData
//                         // })
//                     }
//                 })

//             };
//         }
//     })
// })

module.exports = router;