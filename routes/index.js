var express = require('express');
var router = express.Router();

var swiperData = require('../public/JSON/swiper.json')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/mobile/swiper', function(req, res, next) {
    res.send(JSON.stringify(swiperData));
});

module.exports = router;
