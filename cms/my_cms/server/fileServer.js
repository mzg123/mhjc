var getFilesInfo=require('../helper/fileHp').getFileInfoByPath;
var writeFile=require('../helper/fileHp').writeFile;
var readFileSync=require('../helper/fileHp').readFileSync;


exports.getFileTree=function(opt){
    var filesList = getFilesInfo(opt.path);
    return opt.text? {text:'static',child:filesList}:filesList;
}

exports.readFileSync=function(opt){
    return readFileSync(opt.path);
}

//var config=require('../config/my_cms.js');
//var filesList = getFilesInfo(config.staticPath);
//var str = JSON.stringify({name:'static',children:filesList});
//var d={text:'static',children:filesList}
//writeFile("json.js",str);
