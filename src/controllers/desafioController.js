var desafioModel = require("../models/desafioModel");

function desafioDiario(req, res) {
    desafioModel.desafioDiario().then(
        function (resultadoDiario) {
            console.log(`\nResultados encontrados: ${resultadoDiario.length}`);
            console.log(`Resultados: ${JSON.stringify(resultadoDiario)}`); // transforma JSON em String

            if (resultadoDiario.length == 1) {
                console.log(resultadoDiario);

                res.json({
                    idDesafio: resultadoDiario[0].idDesafio,
                    jogador: resultadoDiario[0].jogador,
                    imagem: resultadoDiario[0].imagem,
                    explicacao: resultadoDiario[0].explicacao
                });

            } else {
                res.status(403).send("Erro ao buscar desafio diário");
            }
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao buscar odesafio diário! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function buscarOpcoes(req, res) {
    let id = req.params.id;

    desafioModel.buscarOpcoes(id).then((resultado) => {
        res.status(200).json(resultado);
    });
}

function resolverDesafio(req, res) {
    let idUsuario = req.body.idUsuarioServer;
    let idDesafio = req.body.idDesafioServer;
    let resposta = req.body.respostaServer;

    desafioModel.resolverDesafio(idUsuario, idDesafio, resposta).then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function listarDesafios(req, res) {
    desafioModel.listarDesafios().then(function (resultado) {
        console.log(`\nResultados encontrados: ${resultado.length}`);
        console.log(`Resultados: ${JSON.stringify(resultado)}`);

        res.status(200).json(resultado);
    });
}

function exibirDesafio(req, res) {
    let id = req.params.id;

    desafioModel.exibirDesafio(id).then(function (resultado) {
        console.log(`\nResultados encontrados: ${resultado.length}`);
        console.log(`Resultados: ${JSON.stringify(resultado)}`);

        if (resultado.length == 1) {
            console.log(resultado);

            res.json({
                idDesafio: resultado[0].idDesafio,
                jogador: resultado[0].jogador,
                imagem: resultado[0].imagem,
                explicacao: resultado[0].explicacao
            });

        } else {
            res.status(403).send("Erro ao buscar desafio diário");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("\nHouve um erro ao buscar odesafio diário! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    desafioDiario,
    buscarOpcoes,
    resolverDesafio,
    listarDesafios,
    exibirDesafio
}