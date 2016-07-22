$(function () {

    /**
     * jQuery中的遍历操作会有很多，实际中用的最多的是each
     */
    // http://www.w3school.com.cn/jquery/jquery_ref_selectors.asp
    //odd奇数索引   even偶数索引  first第一个位置  last最后一个位置
    //实现class='ul-1'中的所有li元素奇数索引的位置变色
    $('.ul-1 li:odd').css({
        'color': 'orange',
    })

    /**
     * find() 继续查找
     * filter() 筛选
     * end() 结束当前链条中的最近的筛选操作，并将匹配元素集还原为之前的状态。
     * end() 返回上一级，返回当前选择器开始的状态
     */

    $('.ul-3 li.item-2').css('color', 'red');
    $('.ul-3 li.item-4').css('color', 'red');

    $('.ul-3 li.item-2').css('color', 'red').end().find('.ul-3 li.item-4').css('color', 'red');

    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    $('.ul-3 li').each(function (index) {
        console.log('当前的索引为：' + index, '当前的text为：' + $(this).text());
    })

    var obj ={};
    obj.name = '小球';
    obj.age = 20;
    $(Object.keys(obj)).each(function(i){
        console.log(i + '--' + this);
    });

    

})