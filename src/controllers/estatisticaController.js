var estatisticaModel = require("../models/estatisticaModel");

function estatisticasDesafio(req, res) {
    let id = req.body.idDesafioServer;
    let tempoConclusao = req.body.tempoConclusaoServer;

    estatisticaModel.estatisticasDesafio(id, tempoConclusao).then((resultado) => {
        res.status(200).json(resultado);
    });
}

function resolucoesPeriodo(req, res) {
    let periodo = req.params.periodo;

    estatisticaModel.resolucoesPeriodo(periodo).then((resultado) => {
        res.status(200).json(resultado);
    });
}

function usuariosAtivosPeriodo(req, res) {
    let periodo = req.params.periodo;

    estatisticaModel.usuariosAtivosPeriodo(periodo).then((resultado) => {
        res.status(200).json(resultado);
    });
}

function estatisticasUsuarios(req, res) {
    estatisticaModel.estatisticasUsuarios().then((resultado) => {
        res.status(200).json(resultado);
    })
}

function respostasFaixaTempo(req, res) {
    estatisticaModel.respostasFaixaTempo().then((resultado) => {
        res.status(200).json(resultado);
    })
}

function estatisticasArtigos(req, res) {
    estatisticaModel.estatisticasArtigos().then((resultado) => {
        res.status(200).json(resultado);
    });
}

function estatisticasDesafiosGerais(req, res) {
    estatisticaModel.estatisticasDesafiosGerais().then((resultado) => {
        res.status(200).json(resultado);
    });
}

function usuariosMelhorTempoMedio(req, res) {
    estatisticaModel.usuariosMelhorTempoMedio().then((resultado) => {
        res.status(200).json(resultado);
    });
}

module.exports = {
    estatisticasDesafio,
    resolucoesPeriodo,
    usuariosAtivosPeriodo,
    estatisticasUsuarios,
    respostasFaixaTempo,
    estatisticasArtigos,
    estatisticasDesafiosGerais,
    usuariosMelhorTempoMedio
}