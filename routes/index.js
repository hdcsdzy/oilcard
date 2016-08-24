var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  req.models.dingdan.find({ }, function (err, dingdan) {
    console.log(dingdan);
    // res.render('index', { title: '订单查询', dd: dingdan });
  });
});

module.exports = router;
