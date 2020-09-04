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
    
    let dono = donos.find(dono => dono.id == id);
    console.log("DONO:", dono);
    
    res.render('dono/show', {dono});
});

router.get('/:id/editar', function(req, res, next) {
    res.render('dono/editar');
});
module.exports = router;
