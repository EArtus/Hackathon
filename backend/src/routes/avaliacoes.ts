import { Router } from 'express';
import { cadastrarAvaliacao, buscarAvaliacoes, excluirAvaliacao } from '../controllers/avaliacoesController';
import { verifyToken } from '../middleware/authMiddleware';

const router = Router();

// Rotas protegidas com o middleware verifyToken
router.post('/', verifyToken, cadastrarAvaliacao);
router.get('/', verifyToken, buscarAvaliacoes);
router.delete('/:id', verifyToken, excluirAvaliacao);

export default router;
