var express = require('express');
var router = express.Router();
var csrf = global.token;

/* GET system listing. */
router.get('/system', function(req, res, next) {

  if(!req.session.user){                    //到达/home路径首先判断是否已经登录
      req.session.error = "请先登录";
      res.redirect("/");                	//未登录则重定向到 /login 路径
  }
  											//将token渲染至前端页面
  res.render('system', { title: '新闻集中管理平台',token: token });
  // token = null ;   							//清空缓存
});


module.exports = router;
