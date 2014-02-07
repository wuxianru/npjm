var mongoose = require('mongoose');
var db = require('./db');
var Schema = mongoose.Schema;
// Define User schema
var _User = new Schema({

    email : String,
    name : String,
    salt : String,
    password : String
});
// export them
exports.User = db.conn.model('User', _User);