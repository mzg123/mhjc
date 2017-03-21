var http = require('http');
var Iconv = require('iconv-lite');
// 用于请求的选项
var options = {
    host: 'echarts.baidu.com',
    port: '80',
    path: '/gallery/vendors/echarts/map/js/china.js'
};

// 处理响应的回调函数 http://echarts.baidu.com/gallery/vendors/echarts/map/js/china.js
var callback = function(response){
    // 不断更新数据
    //response.setCharacterEncoding("gbk")
    //console.log(response);
    var body = '';
    response.on('data', function(data) {
        body += data;
    });

    response.on('end', function() {
        // 数据接收完成
        console.log( Iconv.decode(body, 'ansi').toString());
    });
}
// 向服务端发送请求
var req = http.request(options, callback);

req.end();