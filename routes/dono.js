var express = require('express');
var router = express.Router();
var donos = require('./../data/dono');

router.get('/', function(req, res, next) {
    res.render('dono/lista', {donos});
});
router.get('/:id', function(req, res, next) {
    res.render('dono/show');
});
    
module.exports = router;
