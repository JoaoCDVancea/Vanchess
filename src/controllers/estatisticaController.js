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

module.exports = {
    estatisticasDesafio,
    resolucoesPeriodo,
    usuariosAtivosPeriodo
}