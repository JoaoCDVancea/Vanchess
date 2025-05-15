var desafioModel = require("../models/desafioModel");

function desafioDiario(req, res) {
    desafioModel.desafioDiario().then(
        function(resultadoDiario) {
            console.log(`\nResultados encontrados: ${resultadoDiario.length}`);
            console.log(`Resultados: ${JSON.stringify(resultadoDiario)}`); // transforma JSON em String

            if(resultadoDiario.length == 1) {
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

module.exports = {
    desafioDiario
}