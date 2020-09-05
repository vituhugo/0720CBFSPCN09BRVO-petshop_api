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
    const id = req.params.id;

    let dono = donos.find(dono => dono.id == id);

    res.render('dono/editar', {dono});
});

router.post('/:id/alterar', function(req, res, next) {
    const id = req.params.id;
    let dono = donos.find(dono => dono.id == id);
    dono.email = req.body.email;
    dono.nome = req.body.nome;
    dono.data_nascimento = req.body.data_nascimento;

    res.redirect('/dono');
});

module.exports = router;
