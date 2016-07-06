var tBody = document.getElementById('tBody');

$.ajax({
    url:'/users/allusers?type=json',
    success:function(data){
        console.log(data);
        tBody.innerHTML = arrContactData(JSON.parse(data));
    },
    error:function(err){
        console.log(err);
    }
})

function arrContactData(arr){
    var str = '';
    for(var i = 0;i<arr.length;i++){
        var obj = arr[i];
        str += '<tr>'
            + '<td>' + obj.name + '</td>'
            + '<td>' + obj.gender + '</td>'
            + '<td>' + obj.age + '</td>'
            + '<td>' + obj.mobile + '</td>'
            + '<td>' + obj.email + '</td>'
            + '<td>' + obj.school + '</td>'
            + '<td>' + obj.desc + '</td>'
            + '</tr>';
    }
    return str;
}
