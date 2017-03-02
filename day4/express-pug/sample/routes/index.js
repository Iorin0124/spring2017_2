var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var array = [1,2,3,4,5,6,7,8,9,0];
  var ran = Math.floor(Math.random() * array.length);
  res.render('index', { title: array[ran] });
});

module.exports = router;
