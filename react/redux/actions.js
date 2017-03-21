var tabcontent1 = require('../data/tabcontent1.json');
var tabcontent2 = require('../data/tabcontent2.json');
//var tabcontent3 = require('../data/tabcontent3.json');
//var tabcontent4 = require('../data/tabcontent4.json');



module.exports={
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

            tabcontent2.body.data= [
                {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功"}
                , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功1"}
                , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功2"}
                , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功3"}
                , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功4"}
                , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功5"}
                , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功6"}
                , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功7"}
                , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功8"}
                , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功9"}
                , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功10"}
                , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功11"}
                , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功12"}
                , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功13"}
                , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功14"}
                , {"xh":3,"cjr":"cjr","cjje":"10,000.00","jrsj":"2016-12-29 08:49:45","zt":"成功15"}

            ].slice(0,option.page);

            tabcontent2.pager.currentPage=option.page;
            dispatch({ type: option.type,data:tabcontent2
            });
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