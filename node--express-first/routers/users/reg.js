/////引入express
var express = require('express');

var fs = require('fs');

var router = express.Router();

////引入body-parser模块 格式化传入参数
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

/***
 * app.use() 引入一个中间件，处理数据中间使用一个插件
 * 
 */
// 引入body-parser模块，处理post的数据，对所有的请求使用bodyParser模块处理
router.use(bodyParser.urlencoded({ extended: true }));
/**
 * form表单进行post提交的接收地址
 */
router.get('/reg', function (req, res) {
    res.redirect('/static/index.html');//实现页面跳转
});

router.post('/user/reg', urlencodedParser, function (req, res) {
    var name = req.body.name;
    fs.writeFile('data/' + name + '.json', JSON.stringify(req.body));
    // res.send(JSON.stringify(req.body) + '<br/>注册成功');
    res.redirect('/users/allusers');
})
module.exports = router;


