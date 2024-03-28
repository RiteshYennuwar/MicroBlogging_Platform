const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://yennuwarritesh:BNZmwbsgG026JVxh@blogging.ft4toqp.mongodb.net/?retryWrites=true&w=majority&appName=blogging', {useNewUrlParser: true});
var conn = mongoose.Collection;

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

var userModel = mongoose.model('Users',userSchema);
module.exports = userModel;