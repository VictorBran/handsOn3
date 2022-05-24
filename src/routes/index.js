const express = require('express');
const router = express.Router();

const homeController = require("../controller/home");
const PsicologoController = require ("../controller/psicologo");

router.get("/", homeController.index);

router.get("/psicologos", PsicologoController.index);
router.post("/psicologos", PsicologoController.store);
router.delete("/psicologos/:id", PsicologoController.destroy);

module.exports = router;