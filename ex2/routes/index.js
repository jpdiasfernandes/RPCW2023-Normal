var express = require('express');
var router = express.Router();
var contractController = require('../controllers/contract')

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)

  return contractController.getContratos()
      .then(contratos => {
        res.render('index', {d: data, contratos: contratos})
      })
      .catch(err => {
        res.render('error', {error: err.message})
      })
});

router.get('/inst/:nipc', function(req, res, next) {
    var data = new Date().toISOString().substring(0, 16)
    return contractController.getContratosByInst(req.params.nipc)
        .then(resp => {
            console.log(resp)
            res.render('instituicao', {d: data, contratos: resp.contratos, nome: resp.nome, nipc: resp.nipc})
        })
        .catch(err => {
            res.render('error', {error: err.message})
        })
})
router.get('/:id', function(req, res, next) {
    var data = new Date().toISOString().substring(0, 16)

    return contractController.getContrato(req.params.id)
        .then(contrato => {
            res.render('contract', {d: data, contrato: contrato})
        })
        .catch(err => {
            res.render('error', {error: err.message})
        })
})

module.exports = router;
