const express = require('express');
const router = express.Router();

const homeController = require("../controller/home");
const PsicologoController = require ("../controller/psicologo");

router.get("/", homeController.index);

router.get("/psicologos", PsicologoController.index);
router.post("/psicologos", PsicologoController.store);
router.get("/psicologos/:id", PsicologoController.show);
router.delete("/psicologos/:id", PsicologoController.destroy);
router.put("/psicologos/:id", PsicologoController.update);

module.exports = router;