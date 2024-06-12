# Sistema de Gerenciamento de Tarefas

Este projeto é uma aplicação web simples para gerenciamento de tarefas pessoais e profissionais.

## Funcionalidades

- **Cadastro de Usuário:** Novos usuários podem se cadastrar fornecendo um nome de usuário e senha.
- **Login:** Usuários cadastrados podem fazer login para acessar suas listas de tarefas.
- **Gerenciamento de Listas:** Crie e gerencie listas de tarefas como "Faculdade" ou "Trabalho".
- **Gerenciamento de Tarefas:** Adicione, visualize, edite ou exclua tarefas dentro de cada lista.
- **Detalhes da Tarefa:** Veja todos os detalhes de uma tarefa e faça alterações se necessário.

## Tecnologias Utilizadas

- Front-end: HTML, CSS, JavaScript
- Back-end: Node.js com Express
- Template Engine: Mustache
- Banco de Dados: SQLite3 com Sequelize

## Estrutura do Projeto

- "src/": Pasta principal do código fonte.
  - "controllers/": Contém os controladores que gerenciam a lógica da aplicação.
  - "models/": Define os modelos.
  - "routes/": Gerencia as rotas da aplicação.
  - "views/": Armazena os arquivos HTML para renderização.
  - "db.js": Configuração do banco de dados.

- "database.sqlite": Banco de dados principal da aplicação.
- "index.js": Ponto de entrada da aplicação.
- ".dev": Pasta para armazenar variáveis de ambiente.

## Configuração Inicial

1. Clone o repositório
2. Instale as dependências utilizando "npm install"
3. Crie um arquivo ".env" na raiz do projeto com a seguinte variável: "SESSION_SECRET=sua_chave_secreta"
4. Inicie o servidor utilizando "node index.js"



