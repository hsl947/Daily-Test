###  node.js fs文件系统常用操作方法

1. fs.readdir //异步读取一个文件路径，返回目录下的所有文件名称数组
2. fs.readdirSync //同步读取一个文件路径，返回目录下的所有文件名称数组

    ```javascript
    fs.readdir(path,function(err,data){
        if(err){
            console.log(err); //当报错时err有值，否则为undefined
        }
        else{
            data  //值为所有名称的数组
        }
    })

    var arrFiles = fs.readdirSync(path);
    ```

3. fs.readFile //异步读取文件内容
4. fs.readFileSync  //同步读取文件内容,需要toString转换为字符串

5. fs.stat  //异步读取文件的属性
6. fs.statSync  //同步读取文件的属性
    - 同上一目录操作方式 返回一个对象，最常用的是 通过返回值判断当前路径的类型(文件夹或文件)

7. req //request 

    ```
    获取参数方式:
    req.query,获取url参数
    req.body,获取form表单传递的参数
    req,params,获取express框架中:方式传递的参数
    8. res //response 
    输出结果:
    res.redirect,页面跳转
    res.json,输出json数据到页面上，参数为js对象
    res.send,常用于输出字符串到页面上，调试代码使使用
    res.render,渲染一个view  参数1 视图名称  ，参数2 传递到视图中的数据对象
    ///渲染视图部分，传递到页面视图中的js对象使用的时候直接使用属性名即可
    ```