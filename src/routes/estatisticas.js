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

router.get("/estatisticasArtigos", function(req, res) {
    estatisticaController.estatisticasArtigos(req, res);
});

router.get("/estatisticasDesafiosGerais", function(req, res) {
    estatisticaController.estatisticasDesafiosGerais(req, res);
});

router.get("/usuariosMelhorTempoMedio", function(req, res) {
    estatisticaController.usuariosMelhorTempoMedio(req, res);
});

module.exports = router;