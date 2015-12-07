var express = require('express');
var router = express.Router();
var tokens = require('csrf');                     //csrf支持
var namex;


//登陆用户密码验证接口
router.post('/login', function(req, res, next) {
	var msg;
  var secret;
  global.token = 0;    //获取token随机数
	// 过滤用户名和密码
	namex = htmlEncode(req.body.name);
	var passwordx = htmlEncode(req.body.password);

	db.where({ 'name': namex}).get('login', function(err, results, fields) {

		if(results.length>0){
		  if(passwordx == results[0].password) {
		    req.session.user = namex;
        secret = tokens().secretSync();
        token = tokens().create(secret);           
        msg = '0';

        //若用户登录成功则生成token随机数,并把当前用户登录token令牌存入数据库中
        db.where({ 'name': namex}).update('login', { 'token': token}, function(err,info) {
          if (!err) {
            console.log('UPDATE token success !');
          }
        });
       
		  }else{
		  	msg = '1';
		  	req.session.error = "密码错误";
		  }
		}else{
		  msg = '2';
		  req.session.error = '用户名不存在';
		}
		res.send(msg);
	});
});


// 查询函数接口
router.get('/system/query', function(req, res, next) {

  db.where(true).get('newslist', function(err, results, fields) {

    res.json(results);
  });
});


// 精确查找函数接口
router.post('/system/select', function(req, res, next) {
  // 过滤索引
  var idx = htmlEncode(req.body.index);

  db.where({ 'id': idx}).get('newslist', function(err, results, fields) {

    res.json(results);
  });
});


// 记录函数接口
router.post('/system/insert', function(req, res, next) {
  // 过滤前端通过ajax传递过来的数据
  var urlx = htmlEncode(req.body.url);
  var picx = htmlEncode(req.body.pic);
  var titlex = htmlEncode(req.body.title);
  var contentx = htmlEncode(req.body.content);
  var timex = htmlEncode(req.body.time);
  var topicx = htmlEncode(req.body.topic);
  var tidx = htmlEncode(req.body.token);             //获取前端ajax传过来的token

  //用户进行数据库记录操作会先验证ajax传过来的token是否与服务器的token相等
  db.where({ 'name': namex}).get('login', function(err, results, fields) {

    if(results.length>0){
      if(tidx == results[0].token) {
        db.insert('newslist', { 'url': urlx, 'pic': picx,'title' :titlex ,'content' :contentx ,'time' :timex ,'topic' :topicx }, function(err,info) {
          if (!err) {
            console.log('INSERT success !');
          }
        });
      }
    }
  }); 
});


// 更新函数接口
router.post('/system/update', function(req, res, next) {
  // 过滤前端通过ajax传递过来的数据
  var urlx = htmlEncode(req.body.url);
  var picx = htmlEncode(req.body.pic);
  var titlex = htmlEncode(req.body.title);
  var contentx = htmlEncode(req.body.content);
  var timex = htmlEncode(req.body.time);
  var topicx = htmlEncode(req.body.topic);
  var idx = htmlEncode(req.body.id);
  var tidx = htmlEncode(req.body.token);             //获取前端ajax传过来的token

  //用户进行数据库更新操作会先验证ajax传过来的token是否与服务器的token相等
  db.where({ 'name': namex}).get('login', function(err, results, fields) {

    if(results.length>0){
      if(tidx == results[0].token) {
        db.where({ 'id': idx}).update('newslist', { 'url': urlx, 'pic': picx,'title' :titlex ,'content' :contentx ,'time' :timex ,'topic' :topicx }, function(err,info) {
          if (!err) {
            console.log('UPDATE success !');
          }
        });
      }
    }
  });
});


// 删除函数接口
router.post('/system/delete', function(req, res, next) {
  // 过滤索引
  var index = htmlEncode(req.body.del);
  var tidx = htmlEncode(req.body.token);             //获取前端ajax传过来的token

  //用户进行删除库记录操作会先验证ajax传过来的token是否与服务器的token相等
  db.where({ 'name': namex}).get('login', function(err, results, fields) {

    if(results.length>0){
      if(tidx == results[0].token) {
        db.where({ 'id': index}).delete('newslist', function(err) {
          if (!err) {
            console.log('Deleted success !');
          }
        });
      }
    }
  });
});



//html字符转义过滤函数
function htmlEncode(str) {  
    return str.replace(/&/g,"&amp;").replace(/\"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/ /g,"&nbsp;");  
} 

module.exports = router;