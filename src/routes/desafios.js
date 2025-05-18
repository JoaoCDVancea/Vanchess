var express = require("express");
var router = express.Router();

var desafioController = require("../controllers/desafioController");

router.get("/desafioDiario", function(req, res) {
    desafioController.desafioDiario(req, res);
});

router.get("/buscar/:id", function(req, res) {
    desafioController.buscarOpcoes(req, res);
});

router.post("/resolverDesafio", function(req,res) {
    desafioController.resolverDesafio(req, res);
});

module.exports = router;