const express = require('express');
const routes = express.Router();

const homeController = require("../controller/home");

routes.get("/", homeController.index);

module.exports = routes;