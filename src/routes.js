const express = require('express');
const multer = require('multer');
const PostsController = require('./controllers/PostsController');
const LikeController = require('./controllers/LikeController');
const uploadConfig = require('./config/upload');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/posts', PostsController.index);
routes.post('/posts', upload.single('image'), PostsController.store);

routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;