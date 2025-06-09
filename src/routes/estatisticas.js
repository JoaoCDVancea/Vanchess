var express = require("express");
var router = express.Router();

var estatisticaController = require("../controllers/estatisticaController");

router.post("/estatisticasDesafio", function(req, res) {
    estatisticaController.estatisticasDesafio(req, res);
});

router.get("/resolucoesPeriodo/:periodo", function(req, res) {
    estatisticaController.resolucoesPeriodo(req, res);
});

router.get("/usuariosAtivosPeriodo/:periodo", function(req, res) {
    estatisticaController.usuariosAtivosPeriodo(req, res);
});

router.get("/estatisticasUsuarios", function(req, res) {
    estatisticaController.estatisticasUsuarios(req, res);
})

router.get("/respostasFaixaTempo", function(req, res) {
    estatisticaController.respostasFaixaTempo(req, res);
});

module.exports = router;