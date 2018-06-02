const bodyParser = require('body-parser').json();

module.exports = app => {
  const posts = require('../controllers/post.controller.js');

  // Create a new post
  app.post('/posts', bodyParser, posts.create);

  // Retrive all post
  app.get('/posts', posts.findAll);

  // Retrive a single Post with postId
  app.get('/posts/:postId', posts.findOne);

  // Update a post with postId
  app.put('/posts/:postId', posts.update);

  app.delete('/posts/:postId', posts.delete);
}