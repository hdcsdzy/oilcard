var express = require('express');
var router = express.Router();
var utils = require('utility');
var orm = require('orm');

/* GET home page. */
router.get('/', function (req, res, next) {
    // res.render('index', { title: 'Express' });

    var time = utils.YYYYMMDD('2016-08-24');
    console.log(time);

    req.models.dingdan.find({'createtime': orm.between('2016-08-24 10:39:17', '2016-08-24 10:39:19')}, function (err, dingdan) {
        //console.log(dingdan);
        res.render('index', {title: '订单查询', dd: dingdan[0]});
    });
});

module.exports = router;
