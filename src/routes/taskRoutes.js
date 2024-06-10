const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/:id_lista', taskController.showTasksPage);
router.post('/:id_lista', taskController.createTask);
router.get('/detail/:id_tarefa', taskController.showTaskDetailPage);
router.post('/detail/:id_tarefa', taskController.updateTask);
router.post('/delete/:id_tarefa', taskController.deleteTask);

module.exports = router;
