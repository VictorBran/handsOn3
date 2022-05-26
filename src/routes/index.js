const express = require('express');
const router = express.Router();

const homeController = require("../controller/home");
const psicologoController = require ("../controller/psicologo");
const pacienteController = require ("../controller/paciente.js");
const atendimentoController = require("../controller/atendimento");
const authController = require("../controller/auth");

const psicologoAtualizetionValidation = require("../validations/psicologos/atualize");
const pacienteAtualizationValidation = require("../validations/paciente/atualize");
const authLoginValidation = require("../validations/auth/login");

const jwt = require("../middleware/jwt")
const auth = require("../middleware/auth")

router.get("/", homeController.index);

router.get("/psicologos", psicologoController.index);
router.post("/psicologos", psicologoAtualizetionValidation, psicologoController.store);
router.get("/psicologos/:id", psicologoController.show);
router.delete("/psicologos/:id", psicologoController.destroy);
router.put("/psicologos/:id", psicologoAtualizetionValidation, psicologoController.update);

router.get("/pacientes", pacienteController.index);
router.post("/pacientes", pacienteAtualizationValidation, pacienteController.store);
router.get("/pacientes/:id", pacienteController.show);
router.delete("/pacientes/:id", pacienteController.destroy);
router.put("/pacientes/:id", pacienteAtualizationValidation, pacienteController.update);

router.get("/atendimentos", atendimentoController.index);
router.post("/atendimentos", auth, jwt, atendimentoController.store);
router.get("/atendimentos/:id", atendimentoController.show);

router.post("/login",authLoginValidation , authController.login)

module.exports = router;