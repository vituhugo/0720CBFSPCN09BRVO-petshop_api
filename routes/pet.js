var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('pet/lista');
  });
router.get('/:id', function(req, res, next) {
    res.render('pet/show');
});

module.exports = router;
