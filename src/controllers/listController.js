const { List, Task } = require('../models');

exports.showListsPage = async (req, res) => {
    const lists = await List.findAll({
        where: { id_usuario: req.session.userId },
        include: Task
    });

    const listsWithCompletion = lists.map(list => {
        const completedTasks = list.Tasks.filter(task => task.concluida).length;
        const totalTasks = list.Tasks.length;
        return {
            ...list.dataValues,
            completedTasks,
            totalTasks,
            completionPercentage: totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0
        };
    });

    res.render('lists', { lists: listsWithCompletion });
};

exports.createList = async (req, res) => {
    const { titulo_lista } = req.body;

    try {
        await List.create({ titulo_lista, id_usuario: req.session.userId });
        res.redirect('/lists');
    } catch (error) {
        res.render('lists', { error: 'Erro ao criar a lista.' });
    }
};

exports.deleteList = async (req, res) => {
    const { id_lista } = req.params;

    try {
        await List.destroy({ where: { id: id_lista, id_usuario: req.session.userId } });
        res.redirect('/lists');
    } catch (error) {
        res.render('lists', { error: 'Erro ao deletar a lista.' });
    }
};
