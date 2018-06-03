const Post = require('../models/post.model');

// Create and save new Post
exports.create = (req, res) => {

  const body = req.body;

  // Validate request
  if (!body.description) {
    return res.status(400).send({
      message: "Post content cannot be empty"
    });
  }

  // Create a post
  const post = new Post({
    title: body.title || "Untitled Post",
    description: body.description,
    userName: body.userName,
    imageUrl: body.imageUrl,
  });

  // save post in the database
  post.save()
    .then(res.send.bind(res))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the post."
      });
    })
}

// Retrive and return all the poosts from the database
exports.findAll = (req, res) => {
  Post.find()
    .then(posts => {
      res.send(posts);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while retriveing notes.",
      });
    })
}

const postNotFound = (res, postId) => res.status(404).send({
  message: `Post not found with id ${postId}`
});

// Find a single post with a post id
exports.findOne = (req, res) => {
  Post.findById(req.params.postId)
    .then(post => {
      if (!post) {
        return postNotFound(res, req.params.postId);
      }
      res.send(post);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return postNotFound(res, req.params.postId);
      }
      return res.status(500).send({
        message: `Error retrieveing post with id ${req.params.id}`
      });
    });
}

// Update a post defined by the post id
exports.update = (req, res) => {

}

// Delete the post by the given post id
exports.delete = (req, res) => {

}