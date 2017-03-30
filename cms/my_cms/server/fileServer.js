var getFilesInfo=require('../helper/fileHp').getFileInfoByPath;
var writeFile=require('../helper/fileHp').writeFile;
var readFileSync=require('../helper/fileHp').readFileSync;
var readPicSync=require('../helper/fileHp').readPicSync;


exports.getFileTree=function(opt){

    var filesList = getFilesInfo(opt.path,opt.exclude);
    return opt.text? {text:'static',value:'staticback',child:filesList}:filesList;
}

exports.readFileSync=function(opt){
    return readFileSync(opt.path);
}
exports.readPicSync=function(opt){
    return readPicSync(opt.path);
}

exports.writeFile=function(opt){

     writeFile(opt.fileName,opt.fileData,opt.callBack);
}
//var config=require('../config/my_cms.js');
//var filesList = getFilesInfo(config.staticPath);
//var str = JSON.stringify({name:'static',children:filesList});
//var d={text:'static',children:filesList}
//writeFile("json.js",str);
