var express = require('express');
var router = express.Router();
var contractController = require('../controllers/contract.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.query.year) {
        return contractController.getContractsByYear(req.query.year)
            .then(resp => {
                res.jsonp(resp)
            })
            .catch(err => {
                res.jsonp(err.message)
            })
    }
    if (req.query.inst) {
        return contractController.getContractsByInst(req.query.inst)
            .then(resp => {
                res.jsonp(resp)
            })
            .catch(err => {
                res.jsonp(err.message)
            })
    }
    return contractController.getList()
        .then(resp => {
            res.jsonp(resp)
        })
        .catch(err => {
            res.jsonp(err.message)
        })
});

router.get('/courses', function(req, res, next) {
    return contractController.getCourses()
        .then(resp => {
            res.jsonp(resp)
        })
        .catch(err => {
            res.jsonp(err.message)
        })
})

router.get('/institutions', function(req, res, next) {
   return contractController.getInstitutions()
       .then(resp => {
           res.jsonp(resp)
       })
       .catch(err => {
           res.jsonp(err.message)
       })

})
router.get('/:id', function(req, res, next) {
    return contractController.getContract(req.params.id)
        .then(resp => {
            res.jsonp(resp)
        })
        .catch(err => {
            res.jsonp(err.message)
        })
})

router.post('/', function(req, res, next) {
    return contractController.addContract(req.body)
        .then(resp => {
            res.jsonp(resp)
        })
        .catch(err => {
            res.jsonp(err.message)
        })
})

router.delete('/:id', function(req, res, next) {
    return contractController.deleteContract(req.params.id)
        .then(resp => {
            res.jsonp(resp)
        })
        .catch(err => {
            res.jsonp(err.message)
        })
})

module.exports = router;
