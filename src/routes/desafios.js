var express = require("express");
var router = express.Router();

var desafioController = require("../controllers/desafioController");

router.get("/desafioDiario", function(req, res) {
    desafioController.desafioDiario(req, res);
});

module.exports = router;