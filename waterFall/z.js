var Crawler = require("crawler");
var url = require('url');
var db = require('mongoose');
db.connect('mongodb://localhost/kindle_db');

var KindleFile = db.model('kindle_file', {
    title: { type: String, default: "" },
    author: { type: String, default: "" },
    classify: { type: String, default: "" },
    coverUrl: { type: String, default: "" },
    bookUrl: { type: String, default: "" },
})

module.exports = {
    KindleFile: KindleFile
}

var c = new Crawler({
    maxConnections: 10,
    callback: function (error, result, $) {
        $('.o').each(function (index, item) {
            var fileObj = {};
            fileObj.bookUrl = $(item).find('.o-info .o-name a[target="_blank"]').attr('href');
            fileObj.title = $(item).find('.o-info .o-name a[target="_blank"]').attr('title');
            fileObj.author = $(item).find('.o-author a').text();
            fileObj.coverUrl = $(item).find('.o-img a[target="_blank"] img').attr('src');
            fileObj.classify = $(item).find('.o-cate a').text();

            var kindle_file = new KindleFile(fileObj);
            kindle_file.save();
        })
        console.log('----------------------读取完成--------------------------');
    }
});

for (var i = 1; i < 101; i++) {
    if (i == 1) {
        // c.queue('http://kankandou.com');
    }
    else {
        // c.queue('http://kankandou.com/book/page/' + i);
    }
}

