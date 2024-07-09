import { Router } from 'express';
import { cadastrarEquipe, buscarEquipes, excluirEquipe } from '../controllers/equipesController';
import { verifyToken } from '../middleware/authMiddleware';

const router = Router();

// Rotas protegidas com o middleware verifyToken
router.post('/', verifyToken, cadastrarEquipe);
router.get('/', verifyToken, buscarEquipes);
router.delete('/:id', verifyToken, excluirEquipe);

export default router;
