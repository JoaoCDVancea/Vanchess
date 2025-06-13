USE Vanchess;

SELECT * FROM Desafio;
SELECT * FROM Opcao WHERE fkDesafio = 10;

/* DESAFIO 11 */
INSERT INTO Desafio(data, jogador, imagem, explicacao) VALUES
	('2025-05-26', 1, 'https://iili.io/3muFehg.png', 'Xeque-mate das pretas em um único lance: Dxh2#');
    
INSERT INTO Opcao(fkDesafio, idOpcao, descricao, correta) VALUES
	(11, 1, 'Dxd1', 0),
    (11, 2, 'Bxf5', 0),
    (11, 3, 'Dxh2', 1),
    (11, 4, 'Cxh2', 0);
    
SELECT * FROM Desafio;

DESC Desafio;

/* DESAFIO 12 */
INSERT INTO Desafio(data, jogador, imagem, explicacao) VALUES
	('2025-05-27', 0, 'https://iili.io/3pAKODG.png', 'Brancas jogam Th3+, único lance das pretas
    é cobrir com o bispo em Bh5, as brancas capturam o bispo com Txh5+, a única casa de escape do Rei preto é Rg6,
    porém vem o xeque-mate com Bf7#');
    
INSERT INTO Opcao(fkDesafio, idOpcao, descricao, correta) VALUES
	(12, 1, 'Th3+', 1),
    (12, 2, 'Ba4', 0),
    (12, 3, 'Bf7', 0),
    (12, 4, 'Te1', 0);
    
/* DESAFIO 13 */
INSERT INTO Desafio(data, jogador, imagem, explicacao) VALUES
	('2025-05-28', 0, 'https://iili.io/3paWRQS.png', 'Mate em 2 das brancas em Ta7+, única jogada possível das pretas é
	Rb8, e assim brancas jogam Tb7#. Um belo exemplo das peças defendendo umas às outras');
    
INSERT INTO Opcao(fkDesafio, idOpcao, descricao, correta) VALUES
	(13, 1, 'gxh4', 0),
    (13, 2, 'Bb6', 0),
    (13, 3, 'Txc8+', 0),
    (13, 4, 'Ta1+', 1);
    
SELECT 
	COUNT(*) as respostasTotais,
    (SELECT COUNT(*) FROM DesafioResolvido WHERE fkDesafio = 8 AND resposta = 1) as respostasCorretas
FROM DesafioResolvido
WHERE fkDesafio = 8;

/* DESAFIO 14 */
INSERT INTO Desafio(data, jogador, imagem, explicacao) VALUES
	('2025-05-29', 1, 'https://iili.io/3yd1R2f.png', 'Uma bela sequência de mate com Txh2+, pretas capturam a torre com Rxh2,
    pretas dão outro xeque com Th8+, e brancas são obrigadas a cobrir com Dh5, sendo captura com Txh5#');
    
 INSERT INTO Opcao(fkDesafio, idOpcao, descricao, correta) VALUES
	(14, 1, 'Bxf3', 0),
    (14, 2, 'Txh2+', 1),
    (14, 3, 'Tde8', 0),
    (14, 4, 'De5', 0);
    
/* DESAFIO 15 */
INSERT INTO Desafio(data, jogador, imagem, explicacao) VALUES
	('2025-05-30', 0, 'https://iili.io/FHQZB9e.png', 'Belo xeque-mate com Da5#, com a união do cavalo, rei e dama, o rei adversário está
	completamente sem escapatória');
    
INSERT INTO Opcao(fkDesafio, idOpcao, descricao, correta) VALUES
	(15, 1, 'Dxb8', 0),
    (15, 2, 'Dd4', 0),
    (15, 3, 'Da5+', 1),
    (15, 4, 'Te5', 0);

/* DESAFIO 16 */
INSERT INTO Desafio(data, jogador, imagem, explicacao) VALUES
	('2025-05-31', 0, 'https://iili.io/FHZRvhF.png', 'Sacrificando o cavalo em Cxg6, após as pretas o capturaram com hxg6, abre espaço para
	as brancas capturarem a torre com Dxh8, tendo assim, trocado um cavalo por um peão + uma torre');
    
INSERT INTO Opcao(fkDesafio, idOpcao, descricao, correta) VALUES
	(16, 1, 'Cxd7', 0),
    (16, 2, 'c5', 0),
    (16, 3, 'Dh4', 0),
    (16, 4, 'Cxg6', 1);
    
/* DESAFIO 17 */
INSERT INTO Desafio(data, jogador, imagem, explicacao) VALUES
	('2025-06-01', 1, 'https://iili.io/FHZ6D41.png', 'Xeque-mate em dois lances: Sacrificamos a dama em Df1+, sendo a única opção das brancas
    capturar com Txf1, e com isso dando abertura para as brancas ganharem o jogo com Dxf1#');
    
INSERT INTO Opcao(fkDesafio, idOpcao, descricao, correta) VALUES
	(17, 1, 'Dxe3', 0),
    (17, 2, 'Df1+', 1),
    (17, 3, 'De2', 0),
    (17, 4, 'h6', 0);
    
/* DESAFIO 18 */ 
INSERT INTO Desafio(data, jogador, imagem, explicacao) VALUES
	('2025-06-02', 0, 'https://iili.io/FHtuUzX.png', 'Brancas sacrificam a torre em Txg6+, após as pretas capturarem com hxg6,
    as brancas os capturam com xeque com a outra torre, Txg6, a única opção das pretas é Rf8, e pretas acabam com o jogo em Dg7#');
    
INSERT INTO Opcao(fkDesafio, idOpcao, descricao, correta) VALUES
	(18, 1, 'Txg6+', 1),
    (18, 2, 'Dxb7', 0),
    (18, 3, 'Txh3', 0),
    (18, 4, 'Dd7', 0);
    
ALTER TABLE DesafioResolvido
ADD COLUMN tempoConclusao INT;

SELECT * FROM DesafioResolvido
ORDER BY data DESC;

SELECT 
	COUNT(*) AS respostasTotais,
    (SELECT COUNT(*) FROM DesafioResolvido WHERE fkDesafio = '${idDesafio}' AND resposta = 1) as respostasCorretas,
	AVG(tempoConclusao) AS tempoConclusaoMedio,
    (SELECT COUNT(*) FROM DesafioResolvido WHERE tempoConclusao < '${tempoConclusao}' AND fkDesafio = '${idDesafio}') AS qtdTemposMenores
FROM DesafioResolvido
WHERE fkDesafio = '${idDesafio}';

/* DESAFIO 19 */
INSERT INTO Desafio(data, jogador, imagem, explicacao) VALUES
	('2025-06-03', 1, 'https://iili.io/FJhcHVS.png', 'Sacrifindo a torre em Th1+, as pretas abrem oportunidade para uma sequência de mate.
    Após as brancas capturarem a torre com Rxh1, as pretas atacam com Dh4+, e, posteriormente, xeque-mate com Dh2#');
    
INSERT INTO Opcao(fkDesafio, idOpcao, descricao, correta) VALUES
	(19, 1, 'cxb6', 0),
    (19, 2, 'Cf4', 0),
    (19, 3, 'a6', 0),
    (19, 4, 'Th1+', 1);
    
            SELECT COUNT(DISTINCT fkUsuario) as numeroJogadores,
            COUNT(*) AS respostasTotais,
            (SELECT COUNT(*) FROM DesafioResolvido WHERE fkDesafio = 17 AND resposta = 1) as respostasCorretas,
            AVG(tempoConclusao) AS tempoConclusaoMedio,
            (SELECT COUNT(*) FROM DesafioResolvido WHERE tempoConclusao < 10 AND fkDesafio = 17) AS qtdTemposMenores
        FROM DesafioResolvido
        WHERE fkDesafio = 17;

/* DESAFIO 20 */
INSERT INTO Desafio(data, jogador, imagem, explicacao) VALUES
	('2025-06-04', 1, 'https://iili.io/FdXloT7.png', 'Ao jogarem Bf6, as pretas aproveitam uma oportunidade, sendo a única escapatória
	da dama branca a casa de c4, porém assim, pretas acabando ganhando uma torre inteira com Bxa1');
    
INSERT INTO Opcao(fkDesafio, idOpcao, descricao, correta) VALUES
	(20, 1, 'De6', 0),
    (20, 2, 'Bf6', 1),
    (20, 3, 'Tac8', 0),
    (20, 4, 'Bg5', 0);
    
/* DESAFIO 21 */
INSERT INTO Desafio(data, jogador, imagem, explicacao) VALUES
	('2025-06-05', 1, 'https://iili.io/FdyvNBj.png', 'Xeque-mate inevitável: Pretas jogam Dg5, única opção das pretas para defender o ponto de g2
	é Df3, porém facilmente resolvido com Txf3, e não há mais como as brancas defenderem este ponto fraco');
    
INSERT INTO Opcao(fkDesafio, idOpcao, descricao, correta) VALUES
	(21, 1, 'Dg5', 1),
    (21, 2, 'Txf2', 0),
    (21, 3, 'Bxg2', 0),
    (21, 4, 'Cb4', 0);
    
SELECT * FROM DesafioResolvido;
	
SELECT DATE_FORMAT(DesafioResolvido.data, '%d/%m/%y') AS dataResolucao,
	COUNT(*) AS totalRespostas
FROM DesafioResolvido
GROUP BY dataResolucao
ORDER BY dataResolucao DESC;
	
WITH RECURSIVE datas AS (
  SELECT CURDATE() AS data
  UNION ALL
  SELECT DATE_SUB(data, INTERVAL 1 DAY)
  FROM datas
  WHERE DATE_SUB(data, INTERVAL 1 DAY) >= CURDATE() - INTERVAL 6 DAY
)
SELECT 
    DATE_FORMAT(datas.data, '%d/%m') AS dataResolucao,
    COUNT(DR.data) AS totalRespostas
FROM datas
LEFT JOIN DesafioResolvido DR
    ON DATE(DR.data) = datas.data
GROUP BY datas.data
ORDER BY datas.data DESC;

SELECT * FROM Desafio;

/* DESAFIO 22 */
INSERT INTO Desafio (data, jogador, imagem, explicacao) VALUES
	('2025-06-06', 1, 'https://iili.io/F31rbqJ.png', 'Com Dxa4, as pretas capturam o cavalo sem nenhuma complicação, além de 
    também defenderem o cavalo de a3');
    
INSERT INTO Opcao(fkDesafio, idOpcao, descricao, correta) VALUES
	(22, 1, 'Dxa4', 1),
    (22, 2, 'Tb2', 0),
    (22, 3, 'Cxc2', 0),
    (22, 4, 'Bxg3', 0);
    
/* DESAFIO 23 */
INSERT INTO Desafio(data, jogador, imagem, explicacao) VALUES
	('2025-06-07', 0, 'https://iili.io/F3Exyej.png', 'Brancas dão xeque-mate em um único lance: Dd6#, não há para onde as
    pretas fugirem');
    
INSERT INTO Opcao(fkDesafio, idOpcao, descricao, correta) VALUES
	(23, 1, 'Dc3+', 0),
    (23, 2, 'g4', 0),
    (23, 3, 'Dd6+', 1),
    (23, 4, 'Dxa7', 0);

WITH RECURSIVE Horas AS (
	SELECT NOW() - INTERVAL 23 HOUR AS hora
	UNION ALL
	SELECT hora + INTERVAL 1 HOUR
	FROM Horas
	WHERE hora + INTERVAL 1 HOUR <= NOW()
)
SELECT 
	DATE_FORMAT(Horas.hora, '%H:00') AS dataResolucao,
	COUNT(DISTINCT fkUsuario) AS usuariosAtivos
FROM Horas
LEFT JOIN DesafioResolvido
	ON DATE_FORMAT(DesafioResolvido.data, '%Y-%m-%d %H') = DATE_FORMAT(Horas.hora, '%Y-%m-%d %H')
GROUP BY Horas.hora
ORDER BY Horas.hora;

SELECT COUNT(*) AS totalUsuariosCadastrados
FROM Usuario;

SELECT 
  FLOOR(tempoConclusao / 10) * 10 AS faixa_inicio,
  FLOOR(tempoConclusao / 10) * 10 + 9 AS faixa_fim,
  COUNT(*) AS quantidade
FROM DesafioResolvido
GROUP BY faixa_inicio, faixa_fim
ORDER BY faixa_inicio;

/* DESAFIO 24 */
INSERT INTO Desafio(data, jogador, imagem, explicacao) VALUES
	('2025-06-08', 0, 'https://iili.io/F3O0G9t.png', 'Xeque-mate em três lances: Brancas jogam Td7+, o rei preto tem apenas duas casas
    de escape: f8 e g8, porém, ambas culminam em xeque-mate com De7+ e Df7#');
    
INSERT INTO Opcao(fkDesafio, idOpcao, descricao, correta) VALUES
	(24, 1, 'Dc4+', 0),
    (24, 2, 'Td7+', 1),
    (24, 3, 'Dxh1', 0),
    (24, 4, 'Dd5+', 0);
    
SELECT * FROM Desafio;

CREATE TABLE Artigo(
	idArtigo INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT NOT NULL,
    titulo VARCHAR(50) NOT NULL,
    imagem VARCHAR(300) NOT NULL,
    texto TEXT NOT NULL,
    aprovado INT NOT NULL DEFAULT 0,
    data DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT fkArtigoUsuario
	FOREIGN KEY(fkUsuario) REFERENCES Usuario(idUsuario)
);

SELECT titulo,
	imagem,
	texto,
    aprovado,
    DATE_FORMAT(data, "%d/%m/%y %k:%i") AS data,
	Usuario.nome AS nomeUsuario
FROM Artigo
INNER JOIN Usuario ON Artigo.fkUsuario = Usuario.idUsuario;

/* DESAFIO 25 */
INSERT INTO Desafio(data, jogador, imagem, explicacao) VALUES
	('2025-06-09', 1, 'https://iili.io/FKfeRzQ.png', 'Xeque-mate inevitável: Após as pretas jogarem T8c3+, a única opção das brancas é 
    Re4, porém as pretas dão xeque-mate com Te2+');

INSERT INTO Opcao(fkDesafio, idOpcao, descricao, correta) VALUES
	(25, 1, 'g5', 0),
    (25, 2, 'T8c3+', 1),
    (25, 3, 'T2c3+', 0),
    (25, 4, 'h5', 0);

/* DESAFIO 26 */
INSERT INTO Desafio(data, jogador, imagem, explicacao) VALUES
	('2025-06-10', 1, 'https://iili.io/FKqakhJ.png', 'Uma dama por um bispo: Caso as pretas joguem Bc5, as pretas não tem como salvar sua dama,
	já que ela está na mesma linha do rei, então são obrigadas a capturar o bispo, e a dama é capturada com Cc5');

INSERT INTO Opcao(fkDesafio, idOpcao, descricao, correta) VALUES
	(26, 1, 'cxd5', 0),
    (26, 2, 'Da5', 0),
    (26, 3, 'Bc5', 1),
    (26, 4, 'Bg6', 0);

/* DESAFIO 27 */
INSERT INTO Desafio(data, jogador, imagem, explicacao) VALUES
	('2025-06-11', 1, 'https://iili.io/FfIVtC7.png', 'Xeque descoberto com Be4+, ambo bispo e dama dão xeque. Em qualquer xegue descoberto a única
	opção possível é mover o rei. Neste caso, para a casa de g3, seguido de Dg2+ e Dh2# das pretas');
    
INSERT INTO Opcao(fkDesafio, idOpcao, descricao, correta) VALUES
	(27, 1, 'Be4+', 1),
    (27, 2, 'Bb3', 0),
    (27, 3, 'Bf5', 0),
    (27, 4, 'Da3', 0);
    
/* DESAFIO 28 */
INSERT INTO Desafio(data, jogador, imagem, explicacao) VALUES
	('2025-06-12', 1, 'https://iili.io/FfyHxdx.png', 'Após Dh4+, as brancas defendem com g3, o que acaba abrindo uma grande oportunidade para
    as pretas jogarem De4+ e logo em seguida capturarem a torre de h1');
    
INSERT INTO Opcao(fkDesafio, idOpcao, descricao, correta) VALUES
	(28, 1, 'Df6', 0),
    (28, 2, 'Cf6', 0),
    (28, 3, 'Bf2+', 0),
    (28, 4, 'Dh4+', 1);
    
/* DESAFIO 29 */
INSERT INTO Desafio(data, jogador, imagem, explicacao) VALUES
	('2025-06-13', 0, 'https://iili.io/FfyhS0Q.png', 'Mate forçado das brancas. Após jogarem Ba6+, as pretas tem duas opções: ou capturar o bispo
    (mate imediato com Dc6#), ou fugir para a linha 8 (também mate imediato com Dc8#)');
    
INSERT INTO Opcao(fkDesafio, idOpcao, descricao, correta) VALUES
	(29, 1, 'Bxc3', 0),
    (29, 2, 'Bb3', 0),
    (29, 3, 'Ba6+', 1),
    (29, 4, 'De5', 0);
    
SELECT 
	COUNT(*) AS DesafiosResolvidos,
    (SELECT 
		COUNT(*)
	FROM DesafioResolvido
    INNER JOIN Desafio ON Desafio.idDesafio = DesafioResolvido.fkDesafio
    WHERE DATE_FORMAT(DesafioResolvido.data, '%Y-%m-%d') = CURRENT_DATE()
    AND DATE_FORMAT(Desafio.data, '%Y-%m-%d') = CURRENT_DATE())  AS DesafiosDiariosResolvidos
FROM DesafioResolvido;

SELECT 
	Usuario.nome,
	AVG(tempoConclusao) AS tempo_medio
FROM Usuario
INNER JOIN DesafioResolvido ON Usuario.idUsuario = DesafioResolvido.fkUsuario
GROUP BY Usuario.nome
LIMIT 10;