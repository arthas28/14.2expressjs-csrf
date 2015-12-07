var express = require('express');
var router = express.Router();


/* GET login page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: '新闻后台管理登陆系统'});
}); 

module.exports = router;



