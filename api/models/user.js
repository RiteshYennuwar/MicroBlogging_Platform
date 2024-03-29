const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://yennuwarritesh:BNZmwbsgG026JVxh@blogging.ft4toqp.mongodb.net/?retryWrites=true&w=majority&appName=blogging', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
var conn = mongoose.Collection;

var userSchema = new mongoose.Schema({
    name: {type:String, 
        required: true 
           },
      email: {
        type:String, 
        required: true,
        index: {
            unique: true, 
        },
        match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
     
      },
      password:  {
        type:String, 
        required: true
    },
    role:  {
      type:String, 
      required: true
    },
    date:{
      type: Date, 
      default: Date.now }
    
});

var userModel = mongoose.model('Users',userSchema);
module.exports = userModel;