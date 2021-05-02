const mongoose = require('mongoose');
const uri_local = "mongodb://localhost/mydatabase";
const uri_atlas = "mongodb+srv://dbUser:YQAONb7NT8VGcnuO@taskapp.hbxo3.mongodb.net/taskAppDb?retryWrites=true&w=majority";

mongoose.connect(uri_atlas, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log('DB is connected to ', db.connection.host))
    .catch(err => console.error(err));