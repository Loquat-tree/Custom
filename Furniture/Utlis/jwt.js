const JWT = require('express-jwt');

const jwtAuth = JWT({
    secret: 'secret',  //生成token时配置的密钥字符串
    algorithms: ['HS256'], //设置jwt的算法为HHS256
    credentialsRequired: false, //对于没有token的请求不进行解析
}).unless({
    //用于设置不需要验证token的路径
    path: ['/users/login', '/users/register', '/users/isAccess']
});

module.exports = jwtAuth;