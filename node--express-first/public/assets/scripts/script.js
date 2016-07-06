var subBtn = document.getElementById('subBtn');
subBtn.onclick = function(event){
	var hasErr = false;
	for(var i=0;i<allInputs.length;i++){
		if(!doValidate(allInputs[i])){
			hasErr = true;
			break;
		}
	}
	// if(!hasErr){
	// 	alert('提交成功')
	// }
	
	// event.preventDefault();
}

/*****
*隐藏页面中的所有错误提示
* */
var allHelpTips = document.querySelectorAll('.help-block');
for(var i=0;i<allHelpTips.length;i++){
	var helpTip = allHelpTips[i];
	helpTip.style.display = 'none';
}

/****
*页面中所有的需要验证的input
* *****/
var allInputs = document.querySelectorAll('.required');
for(var i=0;i<allInputs.length;i++){
	var input = allInputs[i];
	input.addEventListener('blur',validateInput); ////光标移开时验证控件输入
}
function validateInput(event){
	var target = event.target;
	doValidate(target);
}

/**
 * 验证标签输入是否合法
 * @param  {[type]} target 标签
 * @return {[type]}        返回true和false
 */
function doValidate(target){
	var value = target.value.trim();
	if(!!!value){
		showErr(target);
		return false;
	}
	switch(target.id)
	{
		case 'name':
			////为空已经判断 无需验证
			
		break;	

		case 'mobile':
			if(!isMobel(value)){
				showErr(target);
				return false;
			}

		break;	

		case 'email':
			if(!isEmail(value)){
				showErr(target);
				return false;
			}
		break;	

		case 'age':
			if(value*1 <0 || value*1>120 || isNaN(value)){
				showErr(target);
				return false;
			}
		break;	
	}
	hideErr(target);
	return true;
}


/**
 * 隐藏错误提示
 * @return {[type]} [description]
 */
function hideErr(target){
	////寻找上一级的上一级 添加has-error样式
	target.parentElement.parentElement.classList.remove('has-error');
	////设置提示文字显示
	target.nextElementSibling.nextElementSibling.style.display = 'none';
}

/**
 * 显示错误提示
 * @return {[type]} [description]
 */
function showErr(target){
	target.parentElement.parentElement.classList.add('has-error');
	target.nextElementSibling.nextElementSibling.style.display = 'block';
}

/*******
 * 验证手机号
 * @param value
 * @returns {boolean}
 */
function isMobel(value) {
    if (/^13\d{9}$/g.test(value) || (/^15[0-35-9]\d{8}$/g.test(value)) ||
        (/^18[0-35-9]\d{8}$/g.test(value))) {
        return true;
    } else {
        return false;
    }
}

/***
 * 验证邮箱
 * @param value
 * @returns {boolean}
 */
function isEmail(value) {
    var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (reg.test(value)) {
        return true;
    } else {
        return false;
    }
}