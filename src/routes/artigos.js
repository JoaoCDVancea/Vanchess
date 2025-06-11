var express = require("express");
var router = express.Router();

let artigoController = require("../controllers/artigoController.js");

router.post("/publicarArtigo", function(req, res) {
    artigoController.publicarArtigo(req, res);
});

router.get("/exibirArtigos", function(req, res) {
    artigoController.exibirArtigos(req, res);
});

router.put("/aprovarArtigo/:idArtigo", function(req, res) {
    artigoController.aprovarArtigo(req, res);
});

router.delete("/reprovarArtigo/:idArtigo", function(req, res) {
    artigoController.reprovarArtigo(req, res);
});

module.exports = router;