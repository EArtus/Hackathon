"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const avaliadores_1 = __importDefault(require("./routes/avaliadores"));
const equipes_1 = __importDefault(require("./routes/equipes"));
const avaliacoes_1 = __importDefault(require("./routes/avaliacoes"));
const authMiddleware_1 = require("./middleware/authMiddleware");
// Import the extended Request type
require("./types/express");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)({
    origin: 'http://localhost:3001', // Substitua pelo domínio do seu frontend em produção
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use('/avaliadores', avaliadores_1.default);
app.use('/equipes', equipes_1.default);
app.use('/avaliacoes', avaliacoes_1.default);
app.get('/', (req, res) => {
    res.send('Backend is running');
});
app.get('/api/protected-route', authMiddleware_1.verifyToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
