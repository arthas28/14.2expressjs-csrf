var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');      //cookie支持
var bodyParser = require('body-parser');
var tokens = require('csrf');                     //csrf支持

var login = require('./routes/index');            //路由login
var system = require('./routes/system');          //路由system
var baidunews = require('./routes/baidunews');    //路由baidunews
var dbHandel = require('./routes/database');      //路由dbHandel
var logout = require('./routes/logout');          //路由logout

var session = require('express-session');         //session支持

var app = express();

var Db = require('mysql-activerecord');           //使用mysql-activerecord数据库

global.db = new Db.Adapter({
    server: '127.0.0.1',
    username: 'root',
    password: '',
    database: 'news',
    reconnectTimeout: 2000
  });

if(!db){
  console.log('Mysql connecting error !');
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');                    //使用ejs渲染模板

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());                          //cookie支持
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({                                 //session支持
  secret:'secret',
  cookie:{
    maxAge:1000*60*30
  },
  resave:false,
  saveUninitialized:true
}));

app.use(function(req, res, next) {
  res.locals.user = req.session.user;       // 从session 获取 user对象
  var err = req.session.error;              //获取错误信息
    delete req.session.error;
    res.locals.message = "";                // 展示的信息 message
    if(err){ 
        res.locals.message = '<div class="alert alert-danger" style="margin-bottom:20px;color:red;">'+err+'</div>';
    }
    next();                                 //中间件传递
});

// var test = new tokens();


// app.use(function(req, res, next){

//     res.locals.req = req;
//     res.locals.session = req.session;
//     res.locals.csrf = req.session ? req.session._csrf : "";
//     // console.log(res.locals.csrf);
//     next();
// });

// 路由设置
// app.use('/', tokens);
app.use('/', login);
app.use('/', system);
app.use('/', baidunews);
app.use('/', dbHandel);
app.use('/', logout);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
