var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", function(req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/autenticar", function(req,res) {
    usuarioController.autenticar(req, res);
});

router.get("/verificarAdmin/:idUsuario", function(req, res) {
    usuarioController.verificarAdmin(req, res);
});

module.exports = router;