/////引入express
var express = require('express');

////引入body-parser模块 格式化传入参数
var bodyParser = require('body-parser');

////定义app等于express()
var app = express();

var fs = require('fs');
// 引入art-template模板引擎
var template = require('art-template');

// art-template配置，标准格式，照抄就行
app.set('views', './views');//放模板文件的目录
template.config('base', '');//指定模板的默认路径
template.config('extname', '.html');//模板的后缀名
app.engine('.html', template.__express);//express的html模板引擎使用art-template
app.set('view engine', 'html');//设置使用html模板


// create application/json parser
//var jsonParser = bodyParser.json()

// 创建一个 application/x-www-form-urlencoded parser


//访问3000根目录，输出hello world
// app.get('/', function (req, res) {
//     res.send('hello world!');
// })

// app.get('/news', function (req, res) {
//     res.send('news');
// })
///fs

// 引入通用模块
// app.use('/common',require('./routers/common/common'));

// 第一个表示url路径中访问的名称  第二个是模块文件路径
// 路由访问规则一定要按express定义好的规则进行
app.use('/users',require('./routers/users/list'));

app.use('/users',require('./routers/users/detail'));

app.use('/users',require('./routers/users/reg'));


/*****
 * 指定静态文件
 * 第一个参数可选
 * 如果第一个参数为空 那么直接调用 http://localhost:3000/index.html
 * 否则 需要调用 http://localhost:3000/static/index.html
 */
app.use('/static', express.static('public'))

var server = app.listen('3000', function () {
    var address = server.address().address;
    var port = server.address().port;
    console.log('服务器地址为' + address + ',端口号为' + port);
})