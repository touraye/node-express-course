const express = require('express');
const tasks = require('./router/task');
const connectDB = require('./db/db');
require('dotenv').config();
const notFound = require('./middleware/not-found');

const app = express();

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes GET

app.use('/api/v1/tasks', tasks);
app.use('/api/v1/tasks/:id', tasks);
app.use(notFound);

// app.get('/api/v1/tasks') - get all items
// app.post('/api/v1/tasks') - create new items
// app.get('/api/v1/tasks/:id') - get single item
// app.patch('/api/v1/tasks/:id')  update item
// app.delete('/api/v1/tasks/:id')  delete items

const PORT = 5000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(PORT, console.log(`server starting on port ${PORT}`));
	} catch (error) {
		console.log(error);
	}
};

start();
