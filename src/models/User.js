const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome_usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email_usuario: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    senha_usuario: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;
