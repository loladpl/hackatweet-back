const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
  username: String,
  firstname: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },

  
});

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;