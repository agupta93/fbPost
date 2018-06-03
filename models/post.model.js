const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  title: String,
  description: String,
  userName: String,
  imageUrl: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', PostSchema);