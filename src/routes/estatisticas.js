var express = require("express");
var router = express.Router();

var estatisticaController = require("../controllers/estatisticaController");

router.get("/numeroJogadores/:idDesafio", function(req, res) {
    estatisticaController.numeroJogadores(req, res);
});

router.get("/respostasCorretas/:idDesafio", function(req, res) {
    estatisticaController.respostasCorretas(req, res);
});

router.get("/tempoConclusaoMedio/:idDesafio", function(req, res) {
    estatisticaController.tempoConclusaoMedio(req, res);
});

router.post("/estatisticasDesafio", function(req, res) {
    estatisticaController.estatisticasDesafio(req, res);
});

module.exports = router;