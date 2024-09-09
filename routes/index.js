var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/menu', function(req, res, next) {
  res.render('menu', { title: 'Express' });
});

module.exports = router;
