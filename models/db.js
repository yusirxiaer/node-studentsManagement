var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/studentmanagement');

var db = mongoose.connection;
db.once('open', function (callback) {
    console.log("数据库成功打开");
});

module.exports = db;