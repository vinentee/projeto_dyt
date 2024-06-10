const express = require('express');
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

// Configuração do Mustache como motor de templates
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'src', 'views'));

// Rotas
const authRoutes = require('./src/routes/authRoutes');
const listRoutes = require('./src/routes/listRoutes');
const taskRoutes = require('./src/routes/taskRoutes');

app.use('/', authRoutes);
app.use('/lists', listRoutes);
app.use('/tasks', taskRoutes);

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
