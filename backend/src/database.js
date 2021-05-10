const mongoose = require('mongoose');
const env = require('dotenv').config();
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log('DB is connected to ', db.connection.host))
    .catch(err => console.error(err));