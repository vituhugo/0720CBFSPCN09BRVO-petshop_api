var express = require('express');
var router = express.Router();
var cms = require('./../data/cms');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: "Express", 
      app_nome: cms.global.app_name,
      texto: cms.home.texto_introducao
    });
});

module.exports = router;
