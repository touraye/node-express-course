const express = require('express');
const router = express.Router();
const {
	getAllTasks,
	getSingleTask,
	createTasks,
	updateTask,
	deleteTask,
} = require('../controller/tasks');

router.route('/').get(getAllTasks).post(createTasks);
router.route('/:id').patch(updateTask).get(getSingleTask).delete(deleteTask);

module.exports = router;
