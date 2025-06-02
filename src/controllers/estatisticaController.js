var estatisticaModel = require("../models/estatisticaModel");

function numeroJogadores(req, res) {
    let id = req.params.idDesafio;

    estatisticaModel.numeroJogadores(id).then((resultado) => {
        res.status(200).json(resultado);
    });
}

function respostasCorretas(req, res) {
    let id = req.params.idDesafio;

    estatisticaModel.respostasCorretas(id).then((resultado) => {
        res.status(200).json(resultado);
    });
}

module.exports = {
    numeroJogadores,
    respostasCorretas
}