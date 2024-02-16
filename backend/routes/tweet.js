var express = require('express');
var router = express.Router();


require('../models/connection');
const Tweet = require('../models/tweet');





router.post('/tweet', (req, res) => {  
    const { username, firstname, message, createdAt, likes } = req.body;
  
    const newTweet = new Tweet({
      username,
      firstname,
      message,
      createdAt,
      likes,
    });
  
    newTweet.save()
      .then(savedTweet => {
        res.status(200).json(savedTweet);
      })
      .catch(error => {
        res.status(500).json({ message: error.message });
      });
  });
  
 
 
 
  router.get('/tweet', (req, res) => {  
    Tweet.find()
      .then(tweets => {
        res.status(200).json(tweets);
      })
      .catch(error => {
        res.status(500).json({ message: error.message });
      });
});

module.exports = router;
 
 
 
  module.exports = router;

