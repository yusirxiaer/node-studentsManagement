
var Student = require("../models/Student.js");
var Kecheng = require("../models/Kecheng.js");

//显示首页
exports.showIndex = function(req,res,next){
    Student.find({},function(err,result){
        //result就是所有学生数组
        res.render("index",{
            "students" : result
        });
    });
}