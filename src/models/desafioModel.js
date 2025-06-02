var database = require("../database/config");

function desafioDiario() {
    var instrucaoSql = `
        SELECT * FROM Desafio WHERE data = CURRENT_DATE;
    `;

    console.log("Executando a instrução SQL: \n " + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarOpcoes(id) {
    var instrucaoSql = `
        SELECT * FROM Opcao WHERE fkDesafio = '${id}';
    `;

    return database.executar(instrucaoSql);
}

function resolverDesafio(idUsuario, idDesafio, resposta, tempoConclusao) {
    var instrucaoSql = `
        INSERT INTO DesafioResolvido(fkUsuario, fkDesafio, resposta, tempoConclusao) VALUES 
            ('${idUsuario}', '${idDesafio}', '${resposta}', '${tempoConclusao}');
    `;

    return database.executar(instrucaoSql);
}

function listarDesafios() {
    var instrucaoSql = `
        SELECT idDesafio FROM Desafio WHERE data <= CURRENT_DATE ORDER BY idDesafio DESC;
    `;

    return database.executar(instrucaoSql);
}

function exibirDesafio(id) {
    var instrucaoSql = `
        SELECT * FROM Desafio WHERE idDesafio = '${id}';
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    desafioDiario,
    buscarOpcoes,
    resolverDesafio,
    listarDesafios,
    exibirDesafio
}