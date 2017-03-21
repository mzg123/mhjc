Mock.mock('http://g.cn', {    //匹配.json文件，可执行匹配成功的参数
    mzg:"mzg22"
});

function sendData(url) {
    $.ajax({
        url: url,
        dataType: 'json'
    }).done(function(data, status, jqXHR) {
        //获得mock数据模板中的数据，打印到body上
        console.log(data);
    })
}
sendData('http://g.cn');