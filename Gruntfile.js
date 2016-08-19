/**
 * 1.安装nodejs,运行npm init
 * 2.安装grunt-CLI,运行npm install -g grunt-cli
 * 3.配置package.json，依赖项
 *      "grunt": "~0.4.5",
        "grunt-contrib-jshint": "~0.10.0",
        "grunt-contrib-nodeunit": "~0.4.1",
        "grunt-contrib-uglify": "~0.5.0"
 * 4.安装Grunt 和 grunt插件，运行npm install
 * 5.配置Gruntfile.js
 * 6.gurnt
 *   grunt --watch
 */

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat:{
            foo:{
                files:[
                    // 入口文件 ，输出文件，可同时运行多组任务
                    {src:['public/*.js','public/**.js','public/*.js'],dest:'public/*.js'},
                    {src:['public/*.js','public/**.js','public/*.js'],dest:'public/*.js'},
                    {src:['public/*.js','public/*.js'],dest:'public/*.js'},
                ]
            }

        },
        uglify: {
            options: {
                // 此处定义的banner注释将插入到输出文件的顶部
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
                ////是否生成min.js.map
                sourceMap: true,
                footer: '\n/*这是一个grunt的demo，压缩后的底部*/'
            },
            dist: {
                files:[
                    // 输出文件，入口文件 ，可同时运行多组任务
                    {'public/*.min.js':'public/*.js'},
                    {'public/*.min.js':'public/*.js'},
                    {'public/*.min.js':'public/*.js'}
                ]
            }
        },
        cssmin:{
            target: {
                files: {
                    ///// 目标文件 : 源文件数组
                    'build/*.css': ['src/*.css', 'src/*.css']
                }
            }
        }
    });


    ////注册一个合并代码的任务
    grunt.loadNpmTasks('grunt-contrib-concat');

    /////对代码进行压缩
    grunt.loadNpmTasks('grunt-contrib-uglify');

    /////压缩css文件
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 默认被执行的任务列表。
    grunt.registerTask('default', [ 'concat', 'uglify','cssmin']);

};