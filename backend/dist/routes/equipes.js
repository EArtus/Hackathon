"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const equipesController_1 = require("../controllers/equipesController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
// Rotas protegidas com o middleware verifyToken
router.post('/', authMiddleware_1.verifyToken, equipesController_1.cadastrarEquipe);
router.get('/', authMiddleware_1.verifyToken, equipesController_1.buscarEquipes);
router.delete('/:id', authMiddleware_1.verifyToken, equipesController_1.excluirEquipe);
exports.default = router;
