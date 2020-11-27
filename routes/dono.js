var express = require('express');
var router = express.Router();
var donos = require('./../data/dono');

// router.METODO("ENDERECO", "FUNCAO_ACAO")
router.get('/', function(req, res, next) {
    
    res.status(200).json(donos);
});

router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    
    let dono = donos.find(dono => dono.id == id);
    
    res.status(200).json(dono);
});

router.put('/:id', function(req, res, next) {
    const id = req.params.id;
    let dono = donos.find(dono => dono.id == id);
    dono.email = req.body.email;
    dono.nome = req.body.nome;
    dono.data_nascimento = req.body.data_nascimento;

    res.status(200).json(dono);
});

router.delete('/:id', function(req, res, next) {
    const id = req.params.id;
    const index = donos.findIndex((dono) => dono.id == id);

    if (index === -1) return res.redirect('/dono');

    donos.splice(index, 1);

    res.status(203).json(null);
});

router.post('/', function(req, res, next) {
    let {email, data_nascimento, nome} = res.body;
    
    let novo_dono = {
        id: donos.reverse()[0].id+1, 
        email, 
        data_nascimento, 
        nome
    };

    donos.push(novo_dono)

    res.status(201).json(novo_dono);
})

module.exports = router;
