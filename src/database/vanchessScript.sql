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

SELECT * FROM DesafioResolvido;