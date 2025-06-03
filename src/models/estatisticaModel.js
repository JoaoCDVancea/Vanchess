var database = require("../database/config");

function numeroJogadores(idDesafio) {
    var instrucaoSql = `
        SELECT COUNT(DISTINCT fkUsuario) as numeroJogadores
        FROM DesafioResolvido
        WHERE fkDesafio = '${idDesafio}';
    `;

    return database.executar(instrucaoSql);
}

function respostasCorretas(idDesafio) {
    var instrucaoSql = `
        SELECT 
            COUNT(*) as respostasTotais,
            (SELECT COUNT(*) FROM DesafioResolvido WHERE fkDesafio = '${idDesafio}' AND resposta = 1) as respostasCorretas
        FROM DesafioResolvido
        WHERE fkDesafio = '${idDesafio}';
    `;

    return database.executar(instrucaoSql);
}

function tempoConclusaoMedio(idDesafio) {
    let instrucaoSql = `
        SELECT 
            AVG(tempoConclusao) AS tempoConclusaoMedio
        FROM DesafioResolvido
        WHERE fkDesafio = '${idDesafio}';    
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    numeroJogadores,
    respostasCorretas,
    tempoConclusaoMedio
}