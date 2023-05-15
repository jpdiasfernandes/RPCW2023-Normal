var axios = require('axios')

module.exports.getContratos = () => {
    return axios.get('http://localhost:15015/contracts')
        .then(resp => {
            return resp.data
        })
        .catch(err => {
            return err
        })
}

module.exports.getContrato = (id) => {
    return axios.get('http://localhost:15015/contracts/' + id)
        .then(resp => {
            return resp.data
        })
        .catch(err => {
            return err
        })
}

module.exports.getContratosByInst = (nipc) => {
    return axios.get('http://localhost:15015/contracts?inst=' + nipc)
        .then(resp => {
            res = {}
            res.contratos = resp.data
            res.nipc = nipc
            if (resp.data.length > 0) {
                res.nome = resp.data[0].NomeInstituicao
            }
            return res
        })
        .catch(err => {
            return err
        })
}





