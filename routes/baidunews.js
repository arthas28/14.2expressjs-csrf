var express = require('express');
var router = express.Router();

/* GET baidunews page. */
router.get('/baidunews', function(req, res, next) {

  res.render('baidunews', { title: '百度新闻' });
});

module.exports = router;