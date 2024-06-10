const { Task, List } = require('../models');

exports.showTasksPage = async (req, res) => {
    const { id_lista } = req.params;

    const tasks = await Task.findAll({ where: { id_lista } });
    const list = await List.findOne({ where: { id: id_lista, id_usuario: req.session.userId } });

    if (!list) {
        return res.redirect('/lists');
    }

    res.render('tasks', { tasks, list });
};

exports.createTask = async (req, res) => {
    const { titulo_tarefa, data_conclusao, descricao } = req.body;
    const { id_lista } = req.params;

    try {
        await Task.create({
            titulo_tarefa,
            data_conclusao,
            descricao,
            id_lista
        });
        res.redirect(`/tasks/${id_lista}`);
    } catch (error) {
        res.render('tasks', { error: 'Erro ao criar a tarefa.' });
    }
};

exports.showTaskDetailPage = async (req, res) => {
    const { id_tarefa } = req.params;

    const task = await Task.findOne({ where: { id: id_tarefa } });

    if (!task) {
        return res.redirect('/lists');
    }

    res.render('taskDetail', { task });
};

exports.updateTask = async (req, res) => {
    const { id_tarefa } = req.params;
    const { titulo_tarefa, data_conclusao, descricao, concluida } = req.body;

    try {
        await Task.update({
            titulo_tarefa,
            data_conclusao,
            descricao,
            concluida: concluida === 'on'
        }, {
            where: { id: id_tarefa }
        });
        res.redirect(`/tasks/${task.id_lista}`);
    } catch (error) {
        res.render('taskDetail', { error: 'Erro ao atualizar a tarefa.' });
    }
};

exports.deleteTask = async (req, res) => {
    const { id_tarefa } = req.params;

    try {
        const task = await Task.findOne({ where: { id: id_tarefa } });
        await Task.destroy({ where: { id: id_tarefa } });
        res.redirect(`/tasks/${task.id_lista}`);
    } catch (error) {
        res.render('tasks', { error: 'Erro ao deletar a tarefa.' });
    }
};
