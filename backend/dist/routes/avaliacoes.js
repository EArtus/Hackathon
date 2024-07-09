"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const avaliacoesController_1 = require("../controllers/avaliacoesController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
// Rotas protegidas com o middleware verifyToken
router.post('/', authMiddleware_1.verifyToken, avaliacoesController_1.cadastrarAvaliacao);
router.get('/', authMiddleware_1.verifyToken, avaliacoesController_1.buscarAvaliacoes);
router.delete('/:id', authMiddleware_1.verifyToken, avaliacoesController_1.excluirAvaliacao);
exports.default = router;
