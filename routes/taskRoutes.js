const express = require('express');
const router = express.Router();
const {
  addTask,
  getAllTasks,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

// Task routes
router.post('/', addTask);
router.get('/', getAllTasks);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
