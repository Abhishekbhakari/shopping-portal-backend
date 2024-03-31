const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/shopping_portal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

// Routes
app.use('/tasks', taskRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
