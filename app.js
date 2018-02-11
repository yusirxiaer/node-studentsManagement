var express = require("express");
var app = express();
var router = require("./router/router.js");
var db = require("./models/db.js");
var session = require('express-session');
//使用session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

//模板引擎
app.set("view engine","ejs");
//静态页面
app.use(express.static("./public"));

app.get("/",router.showIndex);              //显示首页



app.listen(3000);