const express = require("express");
const { llamaController } = require("../controllers/llamaController");
const llamaRouter = express.Router();

llamaRouter.get("/", llamaController);

module.exports = llamaRouter;