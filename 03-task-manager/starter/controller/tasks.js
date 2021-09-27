const Task = require('../model/Task');

const getAllTasks = async (req, res) => {
	try {
		const tasks = await Task.find({});
		res.status(200).json({ tasks });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const createTasks = async (req, res) => {
	// res.send('Create new task');
	try {
		const task = await Task.create(req.body);
		res.status(210).json({ task });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const getSingleTask = (req, res) => {
	// res.send('single task');
	res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
	res.send('Update task');
};

const deleteTask = (req, res) => {
	res.send('Delete task');
};

module.exports = {
	getAllTasks,
	createTasks,
	getSingleTask,
	updateTask,
	deleteTask,
};
