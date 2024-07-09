import { Router } from 'express';
import { cadastrarAvaliador, buscarAvaliadores, excluirAvaliador } from '../controllers/avaliadoresController';
import { verifyToken } from '../middleware/authMiddleware';

const router = Router();

// Rotas públicas
router.post('/', cadastrarAvaliador);
router.get('/', buscarAvaliadores);

// Rota protegida com o middleware verifyToken
router.delete('/:id', verifyToken, excluirAvaliador);

export default router;
