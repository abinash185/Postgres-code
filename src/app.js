const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const usersRouter = require('./routes/users.routes');
const { errorHandler, notFoundHandler } = require('./middleware/error.middleware');

const app = express();

// Global middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// API routes
app.use('/api/users', usersRouter);

// 404
app.use(notFoundHandler);

// Error handler
app.use(errorHandler);

module.exports = app;
