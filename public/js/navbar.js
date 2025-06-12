gerarNavbar();

async function gerarNavbar() {
    const isAdmin = await verificarAdmin();
    let texto = '';

    texto = `
        <img src="../assets/imgs/vanchessLogo.png" id="logo">
        <div id="paginas">
            <div class="navbar-link" onclick="navegarPagina('desafios')" id="desafiosNav">
                <p>Desafios</p>
                <img src="../assets/icon/botaoDesafios.svg" alt="">
            </div>
            <div class="navbar-link" onclick="navegarPagina('artigos')" id="artigosNav">
                <p>Artigos</p>
                <img src="../assets/icon/botaoArtigosBranco.svg" alt="">
            </div>
    `;

    if(isAdmin == 1) {
        texto += ` 
            <div class="navbar-link" onclick="navegarPagina('dashboard')" id="dashboardNav">
                <p>Dashboard</p>
                <img src="../assets/icon/dash.svg">
            </div>
            <div class="navbar-link" onclick="navegarPagina('configuracoes')" id="configuracoesNav">
                <p>Configurações</p>
                <img src="../assets/icon/configuracoes.svg">
            </div>
        `;
    }

    texto += `
        </div>
        <div class="navbar-link" id="desconectar" onclick="desconectar()">
            <p>Desconectar</p>
            <img src="../assets/icon/logout.svg">
        </div>
    `;
    
    navbar.innerHTML = texto;

    let paginaSelecionado = document.getElementById(`${sessionStorage.PAGINA}Nav`);
    paginaSelecionado.classList.add('selecionado');
}

function navegarPagina(pagina) {
    window.location = `${pagina}.html`;
    sessionStorage.PAGINA = `${pagina}`;
}

async function verificarAdmin() {
    const respostaAdmin = await fetch(`/usuarios/verificarAdmin/${sessionStorage.ID_USUARIO}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!respostaAdmin.ok) {
        respostaAdmin.text().then(texto => {
            console.error(texto);
        });
        return;
    }

    const jsonAdmin = await respostaAdmin.json();
    return jsonAdmin[0].isAdmin;
}

function desconectar() {
    window.location = '../index.html';
}