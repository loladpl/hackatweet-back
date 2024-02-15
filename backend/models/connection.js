const mongoose = require('mongoose');


const dbURL = 'mongodb+srv://admin:WK6Y9Y4vZJ18pJco@admin.c4h1r16.mongodb.net/Users';




mongoose.connect(dbURL,)
  .then(() => {
    console.log('Connexion à la base de données réussie');
  })
  .catch((err) => {
    console.error('Erreur de connexion à la base de données :', err);
  });


module.exports = mongoose.connection;