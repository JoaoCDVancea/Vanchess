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

function resolucoesPeriodo() {
    let instrucaoSql = `
        WITH RECURSIVE Datas AS (
            SELECT CURDATE() AS data
            UNION ALL
            SELECT DATE_SUB(data, INTERVAL 1 DAY)
            FROM Datas
            WHERE DATE_SUB(data, INTERVAL 1 DAY) >= CURDATE() - INTERVAL 6 DAY
        )
        SELECT 
            DATE_FORMAT(Datas.data, '%d/%m') AS dataResolucao,
            COUNT(DesafioResolvido.data) AS totalRespostas
        FROM Datas
        LEFT JOIN DesafioResolvido
            ON DATE(DesafioResolvido.data) = Datas.data
        GROUP BY Datas.data
        ORDER BY Datas.data;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    estatisticasDesafio,
    resolucoesPeriodo
}