$(function () {

    function log(name, value) {
        console.log(name + ':' + value);
    }

    ///js中使用最多的是获取content的width和height
    log('[$]width', $('.box').width()); //内容content的宽
    log('[$]height', $('.box').height()); //内容content的高

    log('[$]outerWidth', $('.box').outerWidth()); //内容content的宽 + padding + border
    log('[$]outerHeight', $('.box').outerHeight()); //内容content的高 + padding + border

    log('[$]innerWidth', $('.box').innerWidth()); //内容content的宽 + padding
    log('[$]innerHeight', $('.box').innerHeight()); //内容content的高 + padding

    log('[js]clientWidth',document.querySelector('.box').clientWidth); //内容content的宽 + padding
    log('[js]clientHeight',document.querySelector('.box').clientHeight); //内容content的高 + padding

    log('[js]scrollWidth',document.querySelector('.box').scrollWidth); //内容content的宽 
    log('[js]scrollHeight',document.querySelector('.box').scrollHeight); //内容content的高 

    log('[js]offsetWidth',document.querySelector('.box').offsetWidth); //内容content的宽 + padding + border
    log('[js]offsetHeight',document.querySelector('.box').offsetHeight); //内容content的高 + padding + border
    
})