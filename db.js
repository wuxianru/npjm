var mongoose = require('mongoose');
var uri = 'mongodb://localhost/npjm';
var conn = mongoose.createConnection(uri);
conn.on('error',console.error.bind(console,'连接错误:'));

exports.conn=conn;
