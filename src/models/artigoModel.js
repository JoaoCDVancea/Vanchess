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
        SELECT
            idArtigo, 
            titulo,
            imagem,
            texto,
            aprovado,
            DATE_FORMAT(data, "%d/%m/%y %k:%i") AS data,
            Usuario.nome AS nomeUsuario
        FROM Artigo
        INNER JOIN Usuario ON Artigo.fkUsuario = Usuario.idUsuario
        ORDER BY data;
    `;

    return database.executar(instrucaoSql);
}

function aprovarArtigo(idArtigo) {
    let instrucaoSql = `
        UPDATE Artigo
        SET aprovado = 1
        WHERE idArtigo = '${idArtigo}';
    `;

    return database.executar(instrucaoSql);
}

function reprovarArtigo(idArtigo) {
    let instrucaoSql = `
        DELETE FROM Artigo
        WHERE idArtigo = '${idArtigo}';
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    publicarArtigo,
    exibirArtigos,
    aprovarArtigo,
    reprovarArtigo
}