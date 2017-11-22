## es6学习心得

1. Babel 转码器

```javascript
// 转码前
input.map(item => item + 1);

// 转码后
input.map(function (item) {
  return item + 1;
});
```

2. Babel 转码器（.babelrc）

```javascript
{
  "presets": [],
  "plugins": []
}
```

```javascript
# 最新转码规则
$ npm install --save-dev babel-preset-latest

# react 转码规则
$ npm install --save-dev babel-preset-react

# 不同阶段语法提案的转码规则（共有4个阶段），选装一个
$ npm install --save-dev babel-preset-stage-0
$ npm install --save-dev babel-preset-stage-1
$ npm install --save-dev babel-preset-stage-2
$ npm install --save-dev babel-preset-stage-3
```
```javascript
{
  "presets": [
    "latest",
    "react",
    "stage-2"
  ],
  "plugins": []
}
```

3. 命令行转码（babel-cli）
```javascript
$ npm install --global babel-cli

# 转码结果输出到标准输出
$ babel example.js

# 转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
$ babel example.js --out-file compiled.js
# 或者
$ babel example.js -o compiled.js

# 整个目录转码
# --out-dir 或 -d 参数指定输出目录
$ babel src --out-dir lib
# 或者
$ babel src -d lib

# -s 参数生成source map文件
$ babel src -d lib -s
```

> 要支持不同项目使用不同版本的 Babel。

一个解决办法是将babel-cli安装在项目之中。
```javascript
# 安装
$ npm install --save-dev babel-cli

# package.json 
{
  // ...
  "devDependencies": {
    "babel-cli": "^6.0.0"
  },
  "scripts": {
    "build": "babel src -d lib"
  },
}

$ npm run build
```

4. 支持 ES6 的 REPL 环境（babel-node）
```javascript
$ babel-node
> (x => x * 2)(1)
2

{
  "scripts": {
    "script-name": "babel-node script.js"
  }
}
```

5. 实时转码，只适合在开发环境使用（babel-register）
```javascript
$ npm install --save-dev babel-register

require("babel-register");
require("./index.js");
```

6. 调用 Babel 的 API 进行转码（babel-core）
```javascript
$ npm install babel-core --save
```