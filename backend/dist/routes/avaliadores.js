"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const avaliadoresController_1 = require("../controllers/avaliadoresController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
// Rotas protegidas com o middleware verifyToken
router.post('/', authMiddleware_1.verifyToken, avaliadoresController_1.cadastrarAvaliador);
router.get('/', authMiddleware_1.verifyToken, avaliadoresController_1.buscarAvaliadores);
router.delete('/:id', authMiddleware_1.verifyToken, avaliadoresController_1.excluirAvaliador);
exports.default = router;
