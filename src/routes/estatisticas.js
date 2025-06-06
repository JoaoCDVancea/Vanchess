var express = require("express");
var router = express.Router();

var estatisticaController = require("../controllers/estatisticaController");

router.post("/estatisticasDesafio", function(req, res) {
    estatisticaController.estatisticasDesafio(req, res);
});

router.get("/resolucoesPeriodo", function(req, res) {
    estatisticaController.resolucoesPeriodo(req, res);
});

module.exports = router;