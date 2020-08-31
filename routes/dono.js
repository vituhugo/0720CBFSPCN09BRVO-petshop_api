var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('dono/lista');
});
router.get('/:id', function(req, res, next) {
    res.render('dono/show');
});
    
module.exports = router;
