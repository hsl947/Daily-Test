var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require('./z');

var app = express();
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/list/:page', (req, res) => {

  db.KindleFile.find().count((err, total) => {
    if (err) {
      console.log(err);
    }
    else {
      var page = req.params.page;
      console.log(`-----------进入第${page - 1}页------------`);
      var page = page || 1;
      page = parseInt(page);
      var pageSize = 22;
      var pageCount = Math.ceil(total / pageSize);
      if (page > pageCount) {
        page = pageCount;
      }
      if (page < 1) {
        page = 1;
      }
      db.KindleFile.find().skip((page - 1) * pageSize).limit(pageSize).exec((err, data) => {
        res.json({ data: data });
      })
    }
  })
})

app.listen(3333, (req, res) => {
  console.log('服务器运行于端口3333·······');
})