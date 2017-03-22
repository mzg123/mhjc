var getFilesInfo=require('../helper/fileHp').getFileInfoByPath;
var writeFile=require('../helper/fileHp').writeFile;


exports.getFileTree=function(opt){
    var filesList = getFilesInfo(opt.path);
    return opt.text? {text:'static',child:filesList}:filesList;
}

//var config=require('../config/my_cms.js');
//var filesList = getFilesInfo(config.staticPath);
//var str = JSON.stringify({name:'static',children:filesList});
//var d={text:'static',children:filesList}
//writeFile("json.js",str);
