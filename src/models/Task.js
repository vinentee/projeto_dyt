const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const List = require('./List');

const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo_tarefa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_conclusao: {
        type: DataTypes.DATE,
        allowNull: true
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    concluida: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    id_lista: {
        type: DataTypes.INTEGER,
        references: {
            model: List,
            key: 'id'
        }
    }
});

module.exports = Task;
