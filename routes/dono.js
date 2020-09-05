var express = require('express');
var router = express.Router();
var donos = require('./../data/dono');

// router.METODO("ENDERECO", "FUNCAO_ACAO")
router.get('/', function(req, res, next) {
    
    res.render('dono/lista', {donos});
});

router.get('/:id/visualizar', function(req, res, next) {
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

router.put('/:id/alterar', function(req, res, next) {
    const id = req.params.id;
    let dono = donos.find(dono => dono.id == id);
    dono.email = req.body.email;
    dono.nome = req.body.nome;
    dono.data_nascimento = req.body.data_nascimento;

    res.redirect('/dono');
});

router.delete('/:id/remover', function(req, res, next) {
    const id = req.params.id;
    const index = donos.findIndex((dono) => dono.id == id);

    if (index === -1) return res.redirect('/dono');

    donos.splice(index, 1);

    res.redirect('/dono');
});

router.get('/criar', function(req, res, next) {
    res.render('dono/criar');
})

router.post('/guardar', function(req, res, next) {
    let {email, data_nascimento, nome} = res.body;
    
    donos.push({
        id: donos.reverse()[0].id+1, 
        email, 
        data_nascimento, 
        nome
    })

    res.redirect('/dono');
})

module.exports = router;
