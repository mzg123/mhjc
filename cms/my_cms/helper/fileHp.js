var mfs=require('fs');

exports.getFileInfoByPath=function(path)
{
    var filesList = [];
    var targetObj = {};
    _readFile(path,filesList,targetObj);
    return filesList;
}
//遍历读取文件
var files,states;
function _readFile(path,filesList,targetObj)
{
    files = mfs.readdirSync(path);//需要用到同步读取
    files.forEach( iteration);
    function  iteration(file)
    {
        states = mfs.statSync(path+'/'+file);
        if(states.isDirectory())
        {
            var item ;
            if(targetObj["child"])
            {
                item = {text:file,child:[]};
                targetObj["child"].push(item);
            }
            else
            {
                item = {text:file,child:[]};
                filesList.push(item);
            }
            _readFile(path+'/'+file,filesList,item);
        }
        else
        {
            //创建一个对象保存信息
            var obj = new Object();
            obj.size = states.size;//文件大小，以字节为单位
            obj.name = file;//文件名
            obj.path = path+'/'+file; //文件绝对路径

            if(targetObj["child"])
            {
                var item = {text:file,value:obj.path}
                targetObj["child"].push(item);
            }
            else
            {
                var item = {text:file,value:obj.path};
                filesList.push(item);
            }
        }
    }
}

//写入文件utf-8格式
exports.writeFile=function (fileName,fileData,callBack)
{

    mfs.writeFile(fileName,fileData,'utf-8',callBack||complete);
    function complete()
    {
        console.log("文件生成成功");
    }
}
//读取文件内容
exports.readFileSync=function(path){
  return  mfs.readFileSync(path,"utf-8");
}