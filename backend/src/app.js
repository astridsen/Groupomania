const express = require('express');

const app = express();

const dotenv = require('dotenv');
dotenv.config();

require('./utils/database.js');

const authRoutes = require('./routes/auth');

const userRoutes = require('./routes/user');

const postRoutes = require('./routes/post');

//const path = require('path');

//const helmet = require('helmet');

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


//app.use('/images', express.static(path.join(__dirname, 'images')));

//app.use(helmet());

app.use('/api/post', postRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

module.exports = app;