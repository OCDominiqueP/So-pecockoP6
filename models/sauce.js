// Création d'un schéma de données qui contient les champs souhaités

const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
    userId: { type: String },
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number },
    dislikes: { type: Number },
    usersLiked: { type: [String] },
    usersDisliked: [String]
});

// on exporte le model Sauce
module.exports = mongoose.model('sauce', sauceSchema);