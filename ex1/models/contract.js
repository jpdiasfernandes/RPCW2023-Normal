const mongoose = require('mongoose')

var Schema = mongoose.Schema

var Contract = new Schema({
    "NomeInstituicao": String,
    "NIPCInstituicao": Number,
    "NomeTitularContrato": String,
    "CienciaID": String,
    "ORCID": String,
    "CienciaVitae": String,
    "Carreira_RPN": String,
    "Categoria_RPN": String,
    "Vinculo_RPN": String,
    "RegimePrestacaoServico": String,
    "DataInicioContrato": Date,
    "DataFimContrato": Date,
    "ETIremunerado": Number,
    "ProcedimentoVinculacao": String,
    "AreasInvestigacao": String,
    "NivelFormação": String,
    "InstituicaoEnsino": String,
    "PaisInstituição": String,
    "AnoDiploma": Number,
    "Curso": String,
    "AreaCNAEF": String,
    "AreaFORD": String,
    "ProvasAgregacao": Number,
    "TituloEspecialista": Number,
    "ProvasCoordenacao": Number,
    "ProvasAptidao": Number
}, {
    versionKey: false
})

module.exports = mongoose.model("contracts", Contract)
