let artigoModel = require("../models/artigoModel");

function publicarArtigo(req, res) {
    let titulo = req.body.tituloServer;
    let img = req.body.imgServer;
    let texto = req.body.textoServer;
    let idUsuario = req.body.idUsuarioServer;

    artigoModel.publicarArtigo(titulo, img, texto, idUsuario).then((resultado) => {
        res.status(200).json(resultado);
    });
}

function exibirArtigos(req, res) {
    artigoModel.exibirArtigos().then((resultado) => {
        res.status(200).json(resultado);
    });
}

module.exports = {
    publicarArtigo,
    exibirArtigos
}