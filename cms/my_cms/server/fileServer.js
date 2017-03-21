var getFilesInfo=require('../helper/fileHp').getFileInfoByPath;
var writeFile=require('../helper/fileHp').writeFile;
var config=require('../config/my_cms.js');


var filesList = getFilesInfo(config.staticPath);
var str = JSON.stringify({name:'static',children:filesList});
var d={name:'static',children:filesList}
//str = "var data ={name:'static',children:#1}".replace("#1",str);
writeFile("json.js",str);
//console.log(getFilesInfo);