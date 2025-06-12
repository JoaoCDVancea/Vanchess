let artigosData = [];
let artigoEscrito;

exibirArtigos();

function popUpEscreverArtigo() {
    let popUp = document.getElementById('popupEscreverArtigo');

    if (popUp.classList.contains('hide')) {
        popUp.classList.remove('hide');
        popUp.style.display = 'flex';
    } else {
        popUp.classList.add('hide');
        popUp.style.display = 'none';
    }
}

async function publicarArtigo() {
    let artigo = artigoEscrito;

    let respostaAdicionarArtigo = await fetch("/artigos/publicarArtigo", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            tituloServer: artigo.titulo,
            imgServer: artigo.imagem,
            textoServer: artigo.texto,
            idUsuarioServer: sessionStorage.ID_USUARIO
        })
    });

    if (!respostaAdicionarArtigo.ok) {
        respostaAdicionarArtigo.text((erro) => {
            console.error(erro);
        })
    }

    let popUpEscreverArtigo = document.getElementById('popupEscreverArtigo');

    popUpEscreverArtigo.classList.add('hide');
    popUpEscreverArtigo.style.display = 'none';
}

async function exibirArtigos(pagina) {
    let respostaArtigos = await fetch('/artigos/exibirArtigos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!respostaArtigos.ok) {
        respostaArtigos.text().then((erro) => {
            console.error(erro);
        })
        return;
    };

    let jsonArtigos = await respostaArtigos.json();
    console.log(jsonArtigos);

    let artigos = document.getElementById('artigos');
    artigos.innerHTML = ``;
    jsonArtigos.forEach((artigo, indice) => {

        if(pagina == 'artigos') {
            if(artigo.aprovado == 1) {
                
                artigosData[indice] = ({
                    'idArtigo': artigo.idArtigo,
                    'nomeUsuario': artigo.nomeUsuario,
                    'titulo': artigo.titulo,
                    'texto': artigo.texto,
                    'imagem': artigo.imagem,
                    'data': artigo.data
                });
                
                let artigoConteudo = document.createElement('div');

                artigoConteudo.innerHTML = `
                        <div class="artigo" onclick="lerArtigo(${indice})">
                            <img src="${artigo.imagem}" alt="">
                            <div class="artigo-conteudo">
                                <h1>${artigo.titulo}</h1>
                                <div class="subtitulo">
                                <h2>Escrito por ${artigo.nomeUsuario} </h2>
                                <h2>${artigo.data}</h2>
                            </div>
                            <p>${artigo.texto.substring(0, 200)}...
                            </p>
                        </div>
                    </div>
                `;
                
                artigos.appendChild(artigoConteudo);
            }
        }

        if(pagina == 'configuracoes') {
            if(artigo.aprovado == 0) {
                artigosData[indice] = ({
                    'idArtigo': artigo.idArtigo,
                    'nomeUsuario': artigo.nomeUsuario,
                    'titulo': artigo.titulo,
                    'texto': artigo.texto,
                    'imagem': artigo.imagem,
                    'data': artigo.data
                });
                
                let artigoConteudo = document.createElement('div');
                let onclick = `aprovacaoArtigo(${indice})`;

                artigoConteudo.innerHTML = `
                <div class="artigo" onclick="${onclick}">
                <img src="${artigo.imagem}" alt="">
                <div class="artigo-conteudo">
                <h1>${artigo.titulo}</h1>
                <div class="subtitulo">
                <h2>Escrito por ${artigo.nomeUsuario} </h2>
                <h2>${artigo.data}</h2>
                </div>
                <p>${artigo.texto.substring(0, 200)}...
                </p>
                </div>
                </div>
                `;
                
                artigos.appendChild(artigoConteudo);
            }
        }
    });
}

function exibirArtigo(artigo, metodo) {
    let popupArtigo = document.getElementById('popupArtigo');
    let texto = '';
    console.log(artigo);
    texto = `
            <div class="artigoLeitura">
                <img src="${artigo.imagem}">
                <div class="artigoLeitura-conteudo">
                    <h1>${artigo.titulo}</h1>
                    <div class="subtitulo">
                        <h2>Escrito por ${artigo.nomeUsuario} </h2>
                        <h2>${artigo.data}</h2>
                    </div>
                    <div class="texto">
                        <p>${artigo.texto}</p>
                    </div>                
        `;

    if (metodo == 'previa') {
        texto += `
                <div class="botoes">
                    <div class="cancelar">Voltar</div>
                    <div onclick="publicarArtigo(${artigoEscrito})" class="proximo">Publicar Artigo</div>
                </div>
            `;
    }

    if (metodo == 'aprovacao') {
        texto += `
            <div class="botoes">
                <div class="cancelar" onclick="reprovarArtigo(${artigo.idArtigo})">Reprovar</div>
                <div onclick="aprovarArtigo(${artigo.idArtigo})" class="proximo">Aprovar</div>
            </div>
        `;
    }

    texto += `
                </div>
            </div>
        `;

    popupArtigo.innerHTML = texto;

    popupArtigo.classList.remove('hide');
    popupArtigo.style.display = 'flex';
}

function lerArtigo(indice) {
    let artigo = artigosData[indice];

    exibirArtigo(artigo, 'leitura');
}

function aprovacaoArtigo(indice) {
    let artigo = artigosData[indice];

    exibirArtigo(artigo, 'aprovacao');
}

function fecharArtigo() {
    let popupArtigo = document.getElementById('popupArtigo');

    popupArtigo.classList.add('hide');
    popupArtigo.style.display = 'none';
}

function verPrevia() {
    let titulo = iptTituloArtigo.value;
    let img = iptImagemArtigo.value;
    let texto = iptTextoArtigo.value;

    if (titulo == '' || img == '' || texto == '') {
        avisoEscreverArtigo.innerHTML = `Preecha todos os campos!`;
        return;
    }

    let artigo = ({
        'nomeUsuario': sessionStorage.NOME_USUARIO,
        'titulo': titulo,
        'texto': texto,
        'imagem': img,
        'data': '13/06/2025'
    })

    exibirArtigo(artigo, 'previa');

    artigoEscrito = artigo;
}

async function aprovarArtigo(idArtigo) {
    let respostaAprovacao = await fetch(`/artigos/aprovarArtigo/${idArtigo}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(!respostaAprovacao.ok) {
        respostaAprovacao.text().then((erro) => {
            console.error(erro);
        });
        return;
    }

    exibirArtigos('configuracoes');
}

async function reprovarArtigo(idArtigo) {
    let repostaReprovacao = await fetch(`/artigos/reprovarArtigo/${idArtigo}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(!repostaReprovacao.ok) {
        repostaReprovacao.text().then((erro) => {
            console.error(erro);
        })
    }

    exibirArtigos('configuracoes');
}