$(function () {
    $('#btn').click(function () {
        console.log('do get data');

        //ajax的常用写法
        // 更多参考 http://www.w3school.com.cn/jquery/ajax_ajax.asp
        $.ajax({
            url: 'http://apis.baidu.com/apistore/mobilenumber/mobilenumber', //请求的地址
            headers: { //请求头
                apikey: 'baea2d9a53f338e9aba5ee3b546cbe26'
            },
            type: 'get',//请求类型 post,get,delete
            // asycn:'', //是否异步 true,false  默认是true异步
            // data: { phone: '15980763390' }, //传递的参数
            data: $('#form').serialize(), //序列化表单值，创建 URL 编码文本字符串 如"phone=&hf=xxx"
            dataType: 'json', //返回值的类型 json,xml,text
            success: function (res) {//成功后的回调函数
                console.log(res);
                for (var key in res.retData) {
                    $('#' + key).text(res.retData[key]); //数据赋值的小技巧！！！
                }
            },
            error: function (err) {//失败后的回调函数
                console.log(err);
            }
        });

        // $.get('',data,function(){});



        console.log('此处代码出现在ajax请求后面');
    });
    
    $('#getApi').click(function () {
        //通过get的方法获取ajax请求
        /**
         * 参数1 url地址
         * 参数2 传递的参数
         * 参数3 回调的函数
         * 参数4 返回类型
         */
        $.get('/api/v1/getData', { name: '小球' }, function (res) {
            console.log(res);
        }, 'json')
    });
})