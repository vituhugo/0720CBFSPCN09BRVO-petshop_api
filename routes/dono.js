var express = require('express');
var router = express.Router();
var donos = require('./../data/dono');

// router.METODO("ENDERECO", "FUNCAO_ACAO")
router.get('/', function(req, res, next) {
    res.render('dono/lista', {donos});
});

router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    console.log("ID DA REQUISICAO:", id);
    res.render('dono/show');
});
    
module.exports = router;
