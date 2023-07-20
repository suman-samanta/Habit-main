const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user31:test123@cluster0.ycvqo.mongodb.net/habitTracker?retryWrites=true&w=majority');
const db = mongoose.connection;
// error
db.on('error',console.error.bind(console,'erroe connecting to db'));
// up and running then message
db.once('open',function(){
    console.log('Success fully connected to the database')
})