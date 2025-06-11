gerarNavbar();

async function gerarNavbar() {
    const isAdmin = await verificarAdmin();
    
    if(isAdmin == 1) {
        navbar.innerHTML += `
            <a href="../dashboard/dashboard.html"><div class="navbar-link">
                <p>Dashboard</p>
            </div></a>
            <a href="../dashboard/configuracoes.html"><div class="navbar-link">
                <p>Configurações</p>
            </div></a> 
        `;
    }
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