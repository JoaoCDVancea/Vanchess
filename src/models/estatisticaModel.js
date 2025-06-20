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

function resolucoesPeriodo(periodo) {
    let instrucaoSql;
    let intervalo;

    console.log('periodo' + periodo);
    
    if(periodo === 'dia') {
        instrucaoSql = `
            WITH RECURSIVE Horas AS (
                SELECT NOW() - INTERVAL 23 HOUR AS hora
                UNION ALL
                SELECT hora + INTERVAL 1 HOUR
                FROM Horas
                WHERE hora + INTERVAL 1 HOUR <= NOW()
            )
            SELECT 
                DATE_FORMAT(Horas.hora, '%H:00') AS dataResolucao,
                COUNT(DesafioResolvido.data) AS totalRespostas
            FROM Horas
            LEFT JOIN DesafioResolvido
                ON DATE_FORMAT(DesafioResolvido.data, '%Y-%m-%d %H') = DATE_FORMAT(Horas.hora, '%Y-%m-%d %H')
            GROUP BY Horas.hora
            ORDER BY Horas.hora;
        `;

        return database.executar(instrucaoSql);
    }

    if(periodo === 'semana') {
        intervalo = 6;
    }

    if(periodo === 'mes') {
        intervalo = 29;
    }

    instrucaoSql = `
        WITH RECURSIVE Datas AS (
            SELECT CURDATE() AS data
            UNION ALL
            SELECT DATE_SUB(data, INTERVAL 1 DAY)
            FROM Datas
            WHERE DATE_SUB(data, INTERVAL 1 DAY) >= CURDATE() - INTERVAL ${intervalo} DAY
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

function usuariosAtivosPeriodo(periodo) {
    let instrucaoSql;
    let intervalo;

    console.log('periodo' + periodo);
    
    if(periodo === 'dia') {
        instrucaoSql = `
            WITH RECURSIVE Horas AS (
                SELECT NOW() - INTERVAL 23 HOUR AS hora
                UNION ALL
                SELECT hora + INTERVAL 1 HOUR
                FROM Horas
                WHERE hora + INTERVAL 1 HOUR <= NOW()
            )
            SELECT 
                DATE_FORMAT(Horas.hora, '%H:00') AS dataAtivo,
                COUNT(DISTINCT fkUsuario) AS usuariosAtivos
            FROM Horas
            LEFT JOIN DesafioResolvido
                ON DATE_FORMAT(DesafioResolvido.data, '%Y-%m-%d %H') = DATE_FORMAT(Horas.hora, '%Y-%m-%d %H')
            GROUP BY Horas.hora
            ORDER BY Horas.hora;
        `;

        return database.executar(instrucaoSql);
    }

    if(periodo === 'semana') {
        intervalo = 6;
    }

    if(periodo === 'mes') {
        intervalo = 29;
    }

    instrucaoSql = `
        WITH RECURSIVE Datas AS (
            SELECT CURDATE() AS data
            UNION ALL
            SELECT DATE_SUB(data, INTERVAL 1 DAY)
            FROM Datas
            WHERE DATE_SUB(data, INTERVAL 1 DAY) >= CURDATE() - INTERVAL ${intervalo} DAY
        )
        SELECT 
            DATE_FORMAT(Datas.data, '%d/%m') AS dataAtivo,
            COUNT(DISTINCT fkUsuario) AS usuariosAtivos
        FROM Datas
        LEFT JOIN DesafioResolvido
            ON DATE(DesafioResolvido.data) = Datas.data
        GROUP BY Datas.data
        ORDER BY Datas.data;
    `;
    
    return database.executar(instrucaoSql);
}

function estatisticasUsuarios() {
    let instrucaoSql = `
        SELECT COUNT(*) AS totalUsuariosCadastrados
        FROM Usuario;
    `;

    return database.executar(instrucaoSql);
}

function respostasFaixaTempo() {
    let instrucaoSql = `
        SELECT 
            FLOOR(tempoConclusao / 10) * 10 AS faixaInicio,
            FLOOR(tempoConclusao / 10) * 10 + 9 AS faixaFim,
            COUNT(*) AS quantidade
        FROM DesafioResolvido
        GROUP BY faixaInicio, faixaFim
        ORDER BY faixainicio;
    `;

    return database.executar(instrucaoSql);
}

function estatisticasArtigos() {
    let instrucaoSql = `
        SELECT COUNT(*) AS totalArtigos
        FROM Artigo
        WHERE aprovado = 1
    `;

    return database.executar(instrucaoSql);
}

function estatisticasDesafiosGerais() {
    let instrucaoSql = `
        SELECT 
            COUNT(*) AS DesafiosResolvidos,
            (SELECT 
                COUNT(*)
            FROM DesafioResolvido
            INNER JOIN Desafio ON Desafio.idDesafio = DesafioResolvido.fkDesafio
            WHERE DATE_FORMAT(DesafioResolvido.data, '%Y-%m-%d') = CURRENT_DATE()
            AND DATE_FORMAT(Desafio.data, '%Y-%m-%d') = CURRENT_DATE())  AS DesafiosDiariosResolvidos
        FROM DesafioResolvido;
    `;

    return database.executar(instrucaoSql);
}

function usuariosMelhorTempoMedio() {
    let instrucaoSql = `
        SELECT 
            Usuario.nome,
            AVG(tempoConclusao) AS tempo_medio
        FROM Usuario
        INNER JOIN DesafioResolvido ON Usuario.idUsuario = DesafioResolvido.fkUsuario
        GROUP BY Usuario.nome
        ORDER BY tempo_medio
        LIMIT 10
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    estatisticasDesafio,
    resolucoesPeriodo,
    usuariosAtivosPeriodo,
    estatisticasUsuarios,
    respostasFaixaTempo,
    estatisticasArtigos,
    estatisticasDesafiosGerais,
    usuariosMelhorTempoMedio
}