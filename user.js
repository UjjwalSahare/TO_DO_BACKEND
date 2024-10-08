const mongoose = require('mongoose');

// Connect to MongoDB

mongoose.connect('mongodb://127.0.0.1:12017://TodoBackend');

const userSchema = userSchema({
    title:String,
    description: String,
});

module.exports = mongoose.model('User',userSchema);