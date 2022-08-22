var express = require('express');
//后端路由，用于分配前端的请求
var router = express.Router();
const nodemailer = require('nodemailer');

router.use(express.static(__dirname + '/public'));

const { isRegister } = require('../Service/usersService');
const { codeModel } = require("../Dao/model/codeModel");
const { json } = require('express');

//判断邮箱是否已注册
router.post('/isRegister', async function (req, res) {
    const { email } = req.body;
    const data = await isRegister(email);//接收第二层的结果
    res.send(data);//返回给前端
});

//获取邮箱验证码
router.get('/getCode', function (req, res) {
    const email = req.query.email;
    const code = Math.floor(Math.random() * 900000) + 100000
    const currentTime = new Date();//获取当前时间
    // const intervalTime = 1000 * 60 * 60; // 过期时间
    const sender = {
        user: '2388124203@qq.com', //注册的qq邮箱账号
        pass: 'dvgzmscooygrdjbc' //邮箱的授权码
    }
    //建立smtp连接
    const transporter = nodemailer.createTransport({
        host: 'smtp.qq.com',
        port: 465,
        auth: {
            user: sender.user, //注册的qq邮箱账号
            pass: sender.pass //邮箱的授权码
        }
    });
    //配置相关参数
    const client = transporter.sendMail({
        from: '"雅舍官网" <2388124203@qq.com>',
        subject: "欢迎您！",
        //前端发过来的邮箱
        to: email,
        //发送验证码
        text: '您的验证码是:' + code + '。请不要把验证码泄露给其他人。如非本人操作,可不用理会!'
    })
    //发送
    transporter.sendMail(client, function (err, msg) {
        const codeSave = { email, code, currentTime }
        if (err) {
            console.log(err)
        } else {
            res.send(msg);
            //5分钟后失效
            codeModel.deleteMany({ email })
            codeModel.create(email, code);
            setInterval(() => {
                codeModel.deleteMany({ email })
            }, 1000 * 60 * 5)
            transporter.close();
            codeModel.insertMany(codeSave)
        }
    })

    // await codeModel.insertMany(codeSave)
})

//验证验证码
router.post('/checkCode', async (req, res) => {
    const { email, code } = req.body
    console.log(email,code)
    // const time = (new Date()).getTime()
    const data = await codeModel.findOne({ uemail: email })
    console.log(data)
    //判断验证码是否正确
    // if (data[0].ucode === code && (data[0].currentTime.getTime()) - time < 60000) {
    //     await codeModel.updateOne({ uemail: email })
    // } else {
    //     console.log('验证码过期！')
    // }
})

module.exports = router;