var Crawler = require("crawler");
var url = require('url');

var c = new Crawler({
    maxConnections: 10,
    // This will be called for each crawled page
    callback: function (error, result, $) {
        // $ is Cheerio by default
        //a lean implementation of core jQuery designed specifically for the server
        $('.a-spacing-small a[target="_blank"]').each(function (index, a) {
            var toQueueUrl = $(a).attr('href');//获取href属性
            var text = $(a).attr('title');//获取文本内容
            // c.queue(toQueueUrl);
            console.log(text + "(" + toQueueUrl + ")");
        });
        $('.a-link-normal img').each(function (index,img){
            var imgSrc = $(img).attr('src');
            console.log(imgSrc);
            var Downloader = require('mt-files-downloader');//引入模块
            var downloader = new Downloader();//实例化方法
            var fileDir = './downloads/';//保存路径
            var fileSaveName = fileDir + (new Date()).getTime() + '.' + imgSrc.split('.').slice(-1);
            var dl = downloader.download(imgSrc, fileSaveName);//配置参数
            dl.start();//执行
        })
        console.log('------------读取完成--------------');
    }
});

/**
 * jquery元素选择器
 * 快速入口
 * $('#id') 根据元素标签的id选择元素
 * $('.class')  根据元素的class值返回数组
 * $('div') 选择div元素
 * $('.className' a[target="_blank"])  选择对应class 内部所有包含target=blank的a标签
 * 
 */

// Queue just one URL, with default callback
c.queue('https://www.amazon.cn/s/ref=lp_658429051_nr_n_8?fst=as%3Aoff&rh=n%3A658390051%2Cn%3A%21658391051%2Cn%3A658429051%2Cn%3A659071051&bbn=658429051&ie=UTF8&qid=1466662499&rnid=658429051');

// 下载百度图片
var Downloader = require('mt-files-downloader');//引入模块
var downloader = new Downloader();//实例化方法
var fileUrl = 'http://www.bz55.com/uploads/allimg/150519/140-150519105928.jpg';//远程文件地址
var fileDir = './downloads/';//保存路径
var fileSaveName = fileUrl + (new Date()).getTime() + '.'+ (fileUrl.split('.')).slice(-1);
var dl = downloader.download(fileUrl, fileSaveName);//配置参数
dl.start();//执行