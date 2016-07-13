module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // 代码合并
        // concat: {
        //     options: {
        //         // 定义一个用于插入合并输出文件之间的字符
        //         separator: ';'
        //     },
        //     dist: {
        //         // 将要被合并的文件
        //         src: ['src/*.js'],
        //         // 合并后的JS文件的存放位置
        //         dest: 'build/build.js'
        //     }
        // },


        concat: {
            foo: {
                files: [
                    { src: ['src/index.js', 'src/login.js'], dest: 'build/build-login.js' },
                    { src: ['src/index.js', 'src/reg.js'], dest: 'build/build-reg.js' }
                ]
            }
        },

        uglify: {
            options: {
                // 是否生成min.js.map
                sourceMap: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
                footer: '\n/*这是一个压缩后底部*/'
            },
            dist: {
                // files: {
                //     'build/build-mini.js': 'build/build.js'
                // }

                // 此处对多个js文件进行压缩，用数组表示
                files: [{ 'build/build-login-mini.js': 'build/build-login.js' },
                    { 'build/build-reg-min.js': 'build/build-reg.js' }
                ]

                // src:'build/build.js',
                // dest: 'build/build-mini.js'
            }
        },

        // 压缩css文件
        cssmin: {
            target: {
                files: {
                    'build/build.css': ['src/index1.css', 'src/index2.css']
                }
            }
        },

        
        watch: {
            scripts: {
                // 要监听的文件
                files: ['Gruntfile.js', 'package.json', 'src/*.js', 'src/*.css'],
                tasks: ['default']
            }
        }
        //     jshint: {
        //         options: {

        //             // 循环或条件语句必须使用花括号包围
        //             curly: true,

        //             // 兼容低级浏览器
        //             es3: true,

        //             // 禁止重写原生对象的原型
        //             freeze: true,

        //             // 禁止定义之前使用变量，忽略function函数声明
        //             latedef: 'nofunc',

        //             // 构造器函数首字母大写
        //             newcap: true,

        //             // 当true是，禁止双引号或单引号混用
        //             "quotmark": false,

        //             // 变量未定义
        //             "undef": true,

        //             // 变量未使用
        //             "unused": true,

        //             // 代码中使用第三方插件
        //             globals: {
        //                 jQuery: true
        //             }
        //         },
        //         // 需要测试的代码
        //         files: ['Gruntfile.js', 'src/*.js']
        //     }
    });

    // 注册一个测试代码任务
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // 注册一个合并代码任务
    grunt.loadNpmTasks('grunt-contrib-concat');
    // 注册一个压缩代码任务
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // 注册一个压缩css任务
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // 默认被执行的任务列表。
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'watch']);
}