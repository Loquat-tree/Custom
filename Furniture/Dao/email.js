//nodemailer.js
const nodemailer = require('nodemailer');

const sender = {
    user: '2388124203@qq.com', //注册的qq邮箱账号
    pass: 'dvgzmscooygrdjbc' //邮箱的授权码
}

module.exports = {
    async send(address, code) {
        //创建一个smtp连接
        const transporter = nodemailer.createTransport({
            host: 'smtp.qq.com',
            port: 465,
            auth: {
                user: sender.user, //注册的qq邮箱账号
                pass: sender.pass //邮箱的授权码
            }
        });
        //配置相关参数
        const client = await transporter.sendMail({
            from: '"sxt" <2388124203@qq.com>',
            subject: "您的验证码是: code",
            //前端发过来的邮箱
            to:address || email,
            //发送验证码
            text:code || '您的验证码是:' + code + '。请不要把验证码泄露给其他人。如非本人操作,可不用理会!'
        })
    }
}