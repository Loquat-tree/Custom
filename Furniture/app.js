var createError = require('http-errors');
var express = require('express');//导入express
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var emailRouter = require('./routes/email');
var goodsRouter = require('./routes/goods');
var manageRouter = require('./routes/manage');


const jwtAuth = require('./Utlis/jwt');

//创建服务器实例对象
var app = express();

require('./Dao/db')

//导入cors中间件
const cors = require('cors');
//将cors注册为全局中间件
app.use(cors())

//配置解析表单数据的中间件，注意：这个中间件，只能解析application/x-www-form-urlencode格式的表单数据
// app.use(express.urlencoded({extended:false}))

// app.engine('.html', require('ejs').__express);
// view engine setup 默认找views这个目录
app.set('views', path.join(__dirname, 'views'));
//使用ejs模板引擎   
app.set('view engine', 'jade');

// app.get('/', function (req, res) {
//   res.render('productManage', {
//     title: 'what'
//   })
// })

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(jwtAuth);


// app.use(function (req, res, next) {
//   var url = req.originalUrl;//获取浏览器中当前访问的nodejs路由地址；
//   //获取客户端存取的cookie,userCookies为cookie的名称;有时拿不到cookie值，可能是因为拦截器位置放错，获取该cookie的方式是依赖于nodejs自带的cookie模块,必须放在静态资源之前、路由导航之后,否则拿到的cookie就是undefined.
//   var userCookies = req.cookies.userCookies;
//   console.log("Back to" + url);
//   console.log("app获得cookie" + req.cookies.userCookies + "真假：" + (req.cookies.userCookies == undefined));
//   if (url == '/login' && !(userCookies == undefined)) { //通过判断控制用户登录后不能访问登录页面
//     return res.redirect('/public/login.html');//页面重定向
//   }
//   next();
// });

//用于配置ajax请求的一级路径——路由导航
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/email', emailRouter);
app.use('/goods', goodsRouter);
app.use('/manage', manageRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;
//调用app.listen方法，指定端口并启动服务器
app.listen(3006, () => {
  console.log('3006端口启动成功')
});
