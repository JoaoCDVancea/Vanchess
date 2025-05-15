var database = require("../database/config");

function desafioDiario() {
    var instrucaoSql = `
        SELECT * FROM Desafio WHERE data = CURRENT_DATE;
    `;

    console.log("Executando a instrução SQL: \n " + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    desafioDiario
}