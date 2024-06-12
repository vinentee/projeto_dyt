const bcrypt = require('bcryptjs');
const { User } = require('../models');

exports.showLoginPage = (req, res) => {
    res.render('login');
};

exports.showRegisterPage = (req, res) => {
    res.render('register');
};

exports.registerUser = async (req, res) => {
    const { nome_usuario, email_usuario, senha_usuario, confirmacao_senha } = req.body;

    if (senha_usuario !== confirmacao_senha) {
        return res.render('register', { error: 'Senhas não coincidem.' });
    }

    try {
        const hashedPassword = await bcrypt.hash(senha_usuario, 10);
        await User.create({ nome_usuario, email_usuario, senha_usuario: hashedPassword });
        res.redirect('/');
    } catch (error) {
        res.render('register', { error: 'Erro ao criar o usuário.' });
    }
};

exports.loginUser = async (req, res) => {
    const { email_usuario, senha_usuario } = req.body;

    try {
        const user = await User.findOne({ where: { email_usuario } });
        if (user && await bcrypt.compare(senha_usuario, user.senha_usuario)) {
            req.session.userId = user.id;
            res.redirect('/lists');
        } else {
            res.render('login', { error: 'E-mail ou senha incorretos.' });
        }
    } catch (error) {
        res.render('login', { error: 'Erro ao fazer login.' });
    }
};

exports.logoutUser = (req, res) => {
    req.session.destroy();
    res.redirect('/');
};
