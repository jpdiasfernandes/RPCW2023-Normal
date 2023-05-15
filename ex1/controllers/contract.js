var contractModel = require('../models/contract')

module.exports.getList = () => {
    return contractModel.find({})
        .then(resp => {
            return resp
        })
        .catch(err => {
            return err
        })
}

module.exports.getContract = (id) => {
    return contractModel.findOne({_id: id})
        .then(resp => {
            return resp
        })
        .catch(err => {
            return err
        })
}

module.exports.getContractsByYear = (year) => {
    return contractModel.find({DataInicioContrato: {"$gte" : new Date(year, 1, 0), "$lt" : new Date(year, 12, 31)}})
        .then(resp => {
            return resp
        })
        .catch(err => {
            return err
        })
}

module.exports.getContractsByInst = (inst) => {
    return contractModel.find({NIPCInstituicao : inst})
        .then(resp => {
            return resp
        })
        .catch(err => {
            return err
        })
}

module.exports.getCourses = () => {
    return contractModel.distinct("Curso")
        .then(resp => {
            return resp
        })
        .catch(err => {
            return err
        })
}

module.exports.getInstitutions= () => {
    return contractModel.distinct("NIPCInstituicao")
        .then(resp => {
            return resp
        })
        .catch(err => {
            return err
        })
}

module.exports.addContract = (contract) => {
    return contractModel.insertMany([contract])
        .then(resp => {
            return resp
        })
        .catch(err => {
            return err
        })
}

module.exports.deleteContract = (id) => {
    return contractModel.deleteOne({_id: id})
        .then(resp => {
            return resp
        })
        .catch(err => {
            return err
        })
}
