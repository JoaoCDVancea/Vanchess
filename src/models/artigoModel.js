var database = require("../database/config");

function publicarArtigo(titulo, img, texto, idUsuario) {
    let instrucaoSql = `
        INSERT INTO Artigo(fkUsuario, titulo, imagem, texto) VALUES 
            ('${idUsuario}', '${titulo}', '${img}', '${texto}');
    `;

    return database.executar(instrucaoSql);
}

function exibirArtigos() {
    let instrucaoSql = `
        SELECT titulo,
            imagem,
            texto,
            aprovado,
            DATE_FORMAT(data, "%d/%m/%y %k:%i") AS data,
            Usuario.nome AS nomeUsuario
        FROM Artigo
        INNER JOIN Usuario ON Artigo.fkUsuario = Usuario.idUsuario;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    publicarArtigo,
    exibirArtigos
}