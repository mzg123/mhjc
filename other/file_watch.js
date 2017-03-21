//var fs=require("fs")
//var gzip=require("zlib");
//console.log(gzip);
//console.log(process.cwd())
//fs.watch('./zip.js', function(eventType, filename){
//    console.log(`事件类型是: ${eventType}`);
//    if (filename) {
//        console.log(`提供的文件名: ${filename}`);
//    } else {
//        console.log('未提供文件名');
//    }
//});
//

const fs = require('fs');
const rr = fs.createReadStream('null.txt');
rr.on('readable', () => {
    console.log('readable:', rr.read());
});
rr.on('end', () => {
    console.log('end');
});

function fib(n){
    if(n<=1)
    return 1
    else
    return fib(n-1)+fib(n-2);
}