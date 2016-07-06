/////引入express
var express = require('express');

var fs = require('fs');

var router = express.Router();

/**
 * 
 * 输出指定人的注册信息
 * /user?name=XXX
 */
router.get('/user', function (req, res) {
    console.log(req.query.name);
    var name = req.query.name;//获取人名
    // 拼接一个文件名，读取文件数据
    // 同步改异步
    // 面向对象开发的语言中，大部分通过.访问对象上的内容的
    var strFileName = 'data/' + name + '.json';
    /**
     * 
     * 参数1 文件名
     * 参数2 回调函数
     *    回调函数包含两个参数
     *       参数1 err 错误内容
     *       参数2 data 返回结果
     */
    fs.readFile(strFileName, function (err, data) {
        if (err) {
            console.log(err);
            res.send('读取文件错误');
        }
        else {
            // res.send(data.toString());
            var userInfo = JSON.parse(data.toString());
            res.render('userinfo', { data: userInfo });
        }
    });
    // var str = fs.readFileSync('data/'+ name + '.json');
    // console.log(str);
    // res.send(str.toString());
});
module.exports = router;

