const express = require('express');
const router = express.Router();
const listController = require('../controllers/listController');

router.get('/', listController.showListsPage);
router.post('/', listController.createList);
router.post('/delete/:id_lista', listController.deleteList);

module.exports = router;
