var database = require("../database/config");

function estatisticasDesafio(idDesafio, tempoConclusao) {
    let instrucaoSql = `
        SELECT
            COUNT(DISTINCT fkUsuario) as numeroJogadores,
            COUNT(*) AS respostasTotais,
            (SELECT COUNT(*) FROM DesafioResolvido WHERE fkDesafio = '${idDesafio}' AND resposta = 1) as respostasCorretas,
            AVG(tempoConclusao) AS tempoConclusaoMedio,
            (SELECT COUNT(*) FROM DesafioResolvido WHERE tempoConclusao <= '${tempoConclusao}' AND fkDesafio = '${idDesafio}') AS qtdMaisLentos
        FROM DesafioResolvido
        WHERE fkDesafio = '${idDesafio}';
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    estatisticasDesafio
}