// js数组去重
Array.prototype.fun1 = function(){
    var arr = this,
        result = [],
        i,
        len = arr.length;
    for(i = 0;i<len;i++){
        if(!(arr[i] in result)){
            result.push(arr[i]);
        }
    }
    return result;
};
Array.prototype.fun2 = function(){
    var arr = this,
        i,
        j,
        len = arr.length;
    for(i = 0;i<len;i++){
        for(j = i + 1;j<len;j++){
            if(arr[i] === arr[j]){
                arr.splice(j, 1);
                len --;
                j --;
            }
        }
    }
    return arr;
};
Array.prototype.fun3 = function(){
    var arr = this,
        i,
        obj = {},
        result = [],
        len = arr.length;
    for(i = 0;i<len;i++){
        if(!obj[arr[i]]){
            result.push(arr[i]);
            obj[arr[i]] = 1;
        }
    }
    return result;
};
Array.prototype.fun4 = function(){
    //数组递归去重
};
Array.prototype.fun5 = function(){
    // [...new Set()]
};
Array.prototype.fun6 = function(){
    // map, filter
    var arr = this,
        obj = {},
        result = [];
        result = arr.filter((v, k)=>{

        });
    return result;
    // arr.map(function(v, k){
    // });
    // return arr;
};
var arr1 = [1,2,3,2];
arr1.fun1();

