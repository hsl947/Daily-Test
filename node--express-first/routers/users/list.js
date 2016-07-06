/////引入express
var express = require('express');

var fs = require('fs');

var router = express.Router();

// 读取data文件下所有的内容，打印出来
router.get('/allusers', function (req, res) {
    // 读取目录下文件
    //显示输出的内容，分两类
    var showType = req.query.type;
    if (!!showType && showType == 'json') {
        showType = 'json';
    }
    else {
        showType = 'html';
    }
    console.log('当前的输出结果为' + showType);
    fs.readdir('data', function (errDir, dataDir) {
        if (errDir) {
            console.log('读取目录错误');
            res.send('读取data目录失败')
        }
        else {
            // dataDir是一个数组
            console.log(dataDir);
            // 创建一个数组对象用于保存所有用户信息
            var arrAllUsers = [];
            for (var i = 0; i < dataDir.length; i++) {
                var temFileName = 'data/' + dataDir[i];
                var fileData = fs.readFileSync(temFileName);                
                ///把文件内容转换成object对象
                var fileDataObj = JSON.parse(fileData);
                if (fileDataObj.school) {
                    var schoolData = fileDataObj.school * 1;

                    switch (schoolData) {
                        case 1:
                            fileDataObj.school = '北京大学'
                            break;
                        case 2:
                            fileDataObj.school = '上海交大';
                            break;
                        case 3:
                            fileDataObj.school = '厦门大学';
                            break;
                    }
                }
                else{
                    fileDataObj.school = '北京大学';
                }
                ////如果desc为null或者未定义的时候 赋值desc内容
                if(!!!fileDataObj.desc){
                    fileDataObj.desc = '暂无内容';
                }
                //////把文件内容的object数据加入数组
                arrAllUsers.push(fileDataObj);
                // 同步读取文件，转换成object对象，存入数组
                // arrAllUsers.push(JSON.parse(fs.readFileSync(temFileName)));
            }
            if (showType == 'json') {
                res.send(JSON.stringify(arrAllUsers));
            }
            else {//直接通过服务器端打印一个html文档供客户端显示
                var strHtml = '<ul>';
                arrAllUsers.forEach(function (item, index, arr) {
                    strHtml += '<li>';
                    for (key in item) {
                        strHtml += '<p>' + key + ':' + item[key] + '</p>';
                    }
                    strHtml += '</li>';
                })
                strHtml += '</ul>';
                // res.send(strHtml);
                // var html = template('allusers');
                res.render('allusers', { data: arrAllUsers, title: '所有注册用户' });
            }
            // 把数组对象格式成json字符串进行输出
            // res.send(JSON.stringify(arrAllUsers));
        }
        // res.send('测试读取目录中。。。。');
    });
})

module.exports = router;
