Funcionalidades
Backend
Node.js com Express: Servidor backend configurado com autenticação, rotas para avaliadores e equipes.
PostgreSQL: Banco de dados utilizado para armazenar informações dos avaliadores e equipes.
Autenticação: Middleware para autenticação de usuários.
Frontend
Next.js com TypeScript: Frontend desenvolvido com Next.js e tipado com TypeScript para uma melhor manutenção e escalabilidade.
Tailwind CSS: Utilizado para estilização das páginas.
Páginas:
Login: Página de autenticação de usuários.
Cadastro de Avaliadores: Formulário para cadastro de novos avaliadores.
Cadastro de Equipes: Formulário para cadastro de novas equipes.
Atribuir Avaliador: Funcionalidade para atribuir avaliadores às equipes.
Atribuir Notas: Página para os avaliadores atribuirem notas às equipes.
Listar Avaliações: Lista de avaliações realizadas.
Listar Avaliadores: Lista de avaliadores cadastrados.
Listar Equipes: Lista de equipes cadastradas.
Configuração do Ambiente
Pré-requisitos
Node.js
PostgreSQL
npm ou yarn
Backend
Navegue até a pasta backend:
cd backend
Instale as dependências:
npm install
Configure o arquivo .env com as variáveis de ambiente necessárias:
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=nome_do_banco
Execute o servidor: 
npm start
Frontend
Navegue até a pasta frontend/my-app:
cd frontend/my-app
Instale as dependências:
npm install
Execute o servidor de desenvolvimento:
npm run dev
