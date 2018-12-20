### 安装部分
1. mongodb配置方法

2. mongodb的安装目录
    
    C:\MongoDB\Server\3.2\bin

3. 创建以下目录

    c:\mongo\log
    c:\mongo\db

4. 创建mongodb的配置文件

    ```
    c:\mongo\mongod.cfg 

    文件内容为:
    logpath=c:\mongo\log\mongod.log
    dbpath=c:\mongo\db

    说明 logpath:mongodb日志文件路径,dbpath:数据库内容保存路径

    ```

5. 安装为windows服务

    ```
    进入 C:\MongoDB\Server\3.2\bin
    运行 mongod --config c:\mongo\mongod.cfg --install
    安装成功后在windows的系统服务中会包含MongoDB系统服务
    ```

### 基本命令

   ```
    mongo	MongoDB的客户端程序（命令行程序shell）
    brew services start mongodb //作为系统服务开机启动
    show dbs  //列出当前数据库服务中包含的数据库
    use db_name //切换到db_name这个数据库，如果不存在则创建
    db  //显示当前被选中的数据库
    show collections  //列出当前数据库的所有数据集合(数据表)
    db.cats.insert({'name':'Tom','age':18})  //创建cats集合，加入一条记录
    db.cats.find()  //返回cats集合中的所有数据
    db.cats.find().pretty()  //对返回结果进行格式化输出
    db.cats.find({'name','Tom'})  //查找名字为Tom的cat数据，区分大小写
    db.cats.find({'name',/t/})  //查找所有name包含t的数据
    db.cats.find({'name',/t/,'age':18})  //查找所有name包含t,age等于18的数据
    // select * from cats where name like '%t%' and age<20 //SQlite语言
    // $lt $lte  less than equal 小于等于
    // $gt $gte  greater than equal 大于等于
    db.cats.find({'name',/t/,'age':{$lt:20}})  //查找所有name包含t,age小于18的数据

    /////limit结合skip实现分页效果
    /***
    分页效果举例
    我有12条记录
    每条记录的名字的名字为(1,2,3,4,5,6,7,8,9,10,11,12)
    1,2,3,4,5
    6,7,8,9,10
    11,12
    */
    // skipNum = (pageNum - 1)*pageCount //页码减一*每页显示的数量
    // 第一页
    // db.cats.find().limit(5).skip(0)
    // 第二页
    // db.cats.find().limit(5).skip(5)
    db.cats.find().limit(2) //查询所有的数据，但是只返回前两条
    db.cats.find().skip(2)  //表示跳过两条数据
    db.cats.find().sort({'age':1}) //按照age的升序进行排列
    db.cats.find().sort({'age':-1}) //按照age的降序进行排列

    // 修改name为Tom的年龄为81,添加属性friends属性值为Jerry
    db.cats.update({'name':'Tom'},{$set:{'age':81,'friends':'Jerry'}}) //参数1 query，参数2 修改的内容和值

    db.cats.remove({'name':'Tom'})  //删除name为Tom的数据

    // 查询name等于Tom或者name等于Jerry的数据
    db.cats.find({$or:[{'name':'Tom'},{'name':'Jerry'}]})
    ```


1.查看所有数据库: 
	show dbs
2.切换到数据库runoob: 
	use runoob
3.创建集合(创建数据库)： 
	db.createCollection("user") 或是
	db.user.insert({"name":"菜鸟教程","class":"初三"})  直接创建表及插入数据
4.插入文档/数据：  user是表名
	db.user.insert({"userid":101,"username":"秀秀","age":20,"class":{"classname":"初三","num":6}})
5.删除:  
	a.删除数据库
		db.dropDatabase()(切记要先切换到要删除的数据库 然后在直接该语句) 
    b.删除集合/表user：
		db.user.drop()
	c.删除某一条数据
		db.user.remove({'username':'秀秀'})
	d.删除表内所有数据
		db.user.remove({})
6.查看table的数据：user是表名
	a.查看table的数据:
		db.user.find()
		db.user.find().pretty() pretty() 方法以格式化的方式来显示所有文档。
	b.找到第一条数据 :db.user.findOne() 
	c.查找范围：
		db.user.find({"age" : {$gt : 20}})  大于20岁的数据
		db.user.find({"age": {$gte : 20}})  大于等于20岁的数据
		db.user.find({"age": {$lt : 20}})   小于20岁的数据
		db.user.find({"age": {$lte : 20}})  小于等于20岁的数据
		db.user.find({"age": {$lt :30, $gt : 10}})  大于10 小于30的数据
7.更新文档：
	a.更新
		db.user.update({查找的条件},{$set:{更新的内容}})
	b.更新子文档：class.num
		db.user.update({'username':'秀秀'},{$set:{'class.num':3}})

### nodejs中间件

[http://mongoosejs.com/](http://mongoosejs.com/)

    

