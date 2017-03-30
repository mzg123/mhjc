//var tabcontent1 = require('../data/tabcontent1.json');
//var tabcontent2 = require('../data/tabcontent2.json');
//var tabcontent3 = require('../data/tabcontent3.json');
//var tabcontent4 = require('../data/tabcontent4.json');

module.exports={
    getFileInfo:function(pathType,issave){
        return function (dispatch){
            $.ajax({
                type: "get",
                url: "http://10.0.130.129:3000/file/getFileTree",
                data: {pathType:pathType},
                dataType: "json",
                success: function (data) {
                    !issave&& window.editor&&window.editor.setValue('');
                    dispatch({type:"getFileInfo",treeItems:[data]});
                },
                exception: function (data) {
                    alert("error");
                    console.log(data);
                }
            });
        }
    },
    containSome:function(str,arr){
        return arr.some(function(ele){
            return str.indexOf(ele) > -1
        })
    },
    dbFile:function(filePath){
        var containSome=this.containSome;
        return function (dispatch){
            $.ajax({
                type: "get",
                url: "http://10.0.130.129:3000/file/getFileContent",
                data: {path:filePath},
                dataType: "json",
                success: function (data) {

                    containSome(filePath,['css','js','ftl','ejs','html','txt','docx'])&&window.open("dbFile").document.write(data.filedata);
                    containSome(filePath,['png','ico','jpg'])&&window.open(" /file/showPic?ph="+filePath);

                    //opt.content=data.filedata;
                    //dispatch({type:"dbFile",option:opt,filePath:filePath});
                },
                exception: function (data) {
                    alert("error");
                    console.log(data);
                }
            });
        }
    },
    getFileContent:function(path){
    return function (dispatch){
        var exec=path.split('.');
        exec=exec[exec.length-1];
       var t= 'jpgicopng'.indexOf(exec)+1;
        t&& window.editor&& window.editor.setValue('请在文件管理tab下双击查看！');
        var tt='docx'.indexOf(exec)+1;
        console.log(t,tt);
        t||tt&& window.editor&& window.editor.setValue('暂不支持此类型文档！');
        if(!(t||tt))
        $.ajax({
            type: "get",
            url: "http://10.0.130.129:3000/file/getFileContent",
            data: {path:path},
            dataType: "json",
            success: function (data) {
                window.editor&& window.editor.setValue(data.filedata);
                dispatch({type:"getFileContent",selectFile:path});
            },
            exception: function (data) {
                alert("error");
                console.log(data);
            }
        });
    }
},
    saveFileContent:function(opt){
        var getFileInfo=this.getFileInfo;
    return function (dispatch){
        $.ajax({
            type: "post",
            url: "http://10.0.130.129:3000/file/saveFileContent",
            data: {fileData: window.editor.getValue(),fileName:opt.filePath},
            //data: {fileData: window.editor.getValue(),fileName:"D:/DevCode-Git/yg_online/web/static/html/active/mzg.html"},
            dataType: "json",
            success: function (data) {
                dispatch(getFileInfo(1,true));
                alert("success");
            },
            exception: function (data) {
                alert("error");
                console.log(data);
            }
        });
    }
},
    getAjaxLog:function(subreddit) {
        return function (dispatch) {

            dispatch({ type: "getdata"
                       ,param:subreddit
            })
            setInterval(function(){
                dispatch({ type: "getdata"
                    ,param:subreddit
                    ,data:new Date().getSeconds()
                })
            },10000);
            $.ajax({
                type: "post",
                url: "http://172.24.132.49:10280/get_data",
                data: {
                    name:"/data/logs/tomcat/tomcat-web.log"
                    ,Remode:""
                    ,Rows_count:"1"
                    ,search_conditions:""
                },
                dataType: "json",
                success: function (data) {
                    console.log(data);
                },
                exception: function (data) {
                    alert(9009);
                    console.log(data);
                }

            });
        }
    }
    ,loadData:function(option){
        return function (dispatch) {

            //tabcontent2.body.data= [
            //    {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功"}
            //    , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功1"}
            //    , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功2"}
            //    , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功3"}
            //    , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功4"}
            //    , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功5"}
            //    , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功6"}
            //    , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功7"}
            //    , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功8"}
            //    , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功9"}
            //    , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功10"}
            //    , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功11"}
            //    , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功12"}
            //    , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功13"}
            //    , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功14"}
            //    , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功15"}
            //
            //].slice(0,option.page);
            //
            //tabcontent2.pager.currentPage=option.page;
            //dispatch({ type: option.type,data:tabcontent2
            //});

            //setInterval(function(){
            //    console.log(option);
            //
            //},10000);
            //$.ajax({
            //    type: "get",
            //    async: false,
            //    url: "http://react.com/tabcontent1.json?callType=jsonp",
            //    dataType: "jsonp",
            //    jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
            //
            //    success: function(json){
            //        console.log(json);
            //    },
            //    error: function(){
            //        alert('fail');
            //    }
            //});
//            $.getJSON("http://react.com/tabcontent1.json?callback=?",function(data){
//alert(data);
//            })

        }
    }
    ,tabClick:function(option){
        return function(dispatch){
            //处理其它逻辑
            dispatch({type:"tabclick",tabIndex:option});
        }
    }
}