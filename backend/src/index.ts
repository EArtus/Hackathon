import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import avaliadoresRoutes from './routes/avaliadores';
import equipesRoutes from './routes/equipes';
import avaliacoesRoutes from './routes/avaliacoes';
import { verifyToken } from './middleware/authMiddleware';
import './types/express';


// Import the extended Request type
import './types/express';  // Verifique se o caminho está correto

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:3001', // Substitua pelo domínio do seu frontend em produção
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/avaliadores', avaliadoresRoutes);
app.use('/equipes', equipesRoutes);
app.use('/avaliacoes', avaliacoesRoutes);

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.get('/api/protected-route', verifyToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
