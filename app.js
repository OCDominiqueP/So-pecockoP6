const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');


const sauceRoutes = require('./routes/sauce')
const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://openclassroomsP6:26Julesferry@cluster0.pjhmf.mongodb.net/sauces?retryWrites=true&w=majority', {

        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log('Connection à MongoDB réussie !'))
    .catch(() => console.log('Connection à MongoDB échouée')), {}

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
});

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);


module.exports = app;