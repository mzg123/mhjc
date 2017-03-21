
var inits=function initState(){

    return {
        state:1,
        content:{},
        currenttxt:"",
        treeItems:[
            {
                text:"1第一级"

                ,child:[
                {
                    text:"1-1第二级"
                    ,child:[
                    {
                        text:"1-1-1第三级"
                        ,child:[
                        {text:"1-1-1-1第四级"}
                        ,{text:"1-1-1-2第四级"}
                    ]
                    },
                    {
                        text:"1-1-2第三级"
                    }
                ]
                },
                {
                    text:"1-2第二级",
                    child:[
                        {
                            text:"1-2-1第三级"
                        }
                        ,{
                            text:"1-2-2第三级"
                        }
                    ]
                }
            ]
            }
        ]
        ,options:{
        }

    }
}
function deepCopy(p, c) {
    var c = c || {};
    for (var i in p) {
        if(! p.hasOwnProperty(i)){
            continue;
        }
        if (typeof p[i] === 'object') {
            c[i] = (p[i].constructor === Array) ? [] : {};
            deepCopy(p[i], c[i]);
        } else {
            c[i] = p[i];
        }
    }
    return c;
}
module.exports={
    initState:inits
    ,counter:function (state,action) {
    state||(state={mzg:"mzg"});
    switch (action.type) {
        case 'INCREMENT':
            return state;
        case 'DECREMENT':
            return state;
        default:
            return state;
    }
}
,treeCounter:function (state , action) {
    state||(state=inits());

        switch (action.type) {
            case "loadding":
                state.state=0;
                return deepCopy(state);
                //return $.extend({},state);
            case "getdata":
                state.content[action.param]? state.content[action.param]= action.data+"\n\n"+state.content[action.param]: state.content[action.param]=action.data;
                state.content.currentcontent=state.content[action.param];
                state.currenttxt=state.content[action.param];
                return deepCopy(state);
                //return $.extend({},state);
            default:

                return  state;
            }
    }
    ,navCounter:function(state,action){
        state||(state=inits());
        state.navData || (state=$.extend({},state,{
             navData:{
            type:"hor"
            ,currentMenu:""
                 ,modal_1_option:{id:"modal1",modalState:0}
                 ,modal_2_option:{id:"modal2",modalState:0}
            ,data:[
                {
                    tag:"静态资源"
                    ,href:"/"

                }
                //, {
                //    tag:"组件管理"
                //    ,MenuEc:"leave"
                //    ,child:[
                //        {
                //            tag:"lefttree"
                //            ,href:"/tree"
                //        }
                //        ,{
                //            tag:"轮播"
                //            ,href:"/roller"
                //        }
                //        ,{
                //            tag:"tabs"
                //            ,href:"/tabs"
                //        }
                //        ,{
                //            tag:"modals"
                //            ,href:"/modals"
                //        }
                //         ,{
                //             tag:"tabcomtent"
                //             ,href:"/tabcomtent"
                //         }
                //         ,{
                //             tag:"form"
                //             ,href:"/form"
                //         }
                //    ]
                //}
                //, {
                //    tag:"债权转让"
                //    ,MenuEc:"leave"
                //    ,child:[
                //        {
                //            tag:"p2p债券"
                //            ,href:"/test"
                //        }
                //        ,{
                //            tag:"p2p债券"
                //            ,href:"/test"
                //        }
                //    ]
                //}
                ,{
                    tag:"模板"
                    ,href:"/ejs"

                }
            ]
        }}));
        switch(action.type){
            case "enter":
                state.navData.data.map(function(item,index){
                    if(item.tag==action.tag){
                        item.MenuEc="enter";
                    }
                })
                state.navData.currentMenuEc="currentMenuEcenter";
                return deepCopy(state);
                //return $.extend({},state);
            case "leave":
                state.navData.data.map(function(item,index){
                    if(item.tag==action.tag){
                        item.MenuEc="leave";
                    }
                })
                state.navData.currentMenuEc="currentMenuEcleave";
                return deepCopy(state);
                //return $.extend({},state);

            case "showM1":
                state.navData.modal_1_option=action.option;
                state.navData.modal_1_option.modalState=1;
                return deepCopy(state);
                //return $.extend({},state,true);
            case "showM2":
                state.navData.modal_2_option=action.option;
                state.navData.modal_2_option.modalState=1;
                return deepCopy(state);
                //return $.extend({},state,true);
            case "hiddenM2":
                state.navData.modal_2_option.modalState=0;
                return deepCopy(state);
                //return $.extend({},state,true);

            case "hiddenM1":
                state.navData.modal_1_option.modalState=0;
                return deepCopy(state);
                //return $.extend({},state,true);
            default:
                return state;
        }
    }
    ,tabCounter:function(state,action){
        state||(state=inits());
        state.tabData || (state=$.extend({},state,{
            tabContents:{
                 tc1:{
                     header:{
                         fields:[
                         ]
                     }
                     ,body:{
                         data:[
                             {xh:3,cjr:"cjr",cjje:"10,000.00",jrsj:"2016-12-29 08:49:45",zt:"成功"}
                             ,{xh:3,cjr:"cjr",cjje:"10,000.00",jrsj:"2016-12-29 08:49:45",zt:"成功"}
                             ,{xh:3,cjr:"cjr",cjje:"10,000.00",jrsj:"2016-12-29 08:49:45",zt:"成功"}
                             ,{xh:3,cjr:"cjr",cjje:"10,000.00",jrsj:"2016-12-29 08:49:45",zt:"成功"}
                             ,{xh:3,cjr:"cjr",cjje:"10,000.00",jrsj:"2016-12-29 08:49:45",zt:"成功"}
                         ]
                     }
                     ,pager: {
                         currentPage:6
                         ,totalPage:15

                     }
                 }
                , tc2:{
                    header:{
                        fields:[
                            {tag:"序号",fieldName:"xh"}
                            ,{tag:"出借人",fieldName:"cjr"}
                            ,{tag:"出借金额 （元）",fieldName:"cjje"}
                            ,{tag:"加入时间",fieldName:"jrsj"}
                            ,{tag:"性别",fieldName:"xb"}
                            ,{tag:"状态",fieldName:"zt"}
                        ]
                    }
                    ,body:{
                        data:[
                            {xh:13,cjr:"cjr",cjje:"10,000.00",jrsj:"2016-12-29 08:49:45",xb:"男",zt:"成功"}
                            ,{xh:13,cjr:"cjr",cjje:"10,000.00",jrsj:"2016-12-29 08:49:45",xb:"女",zt:"成功"}
                            ,{xh:13,cjr:"cjr",cjje:"10,000.00",jrsj:"2016-12-29 08:49:45",xb:"男",zt:"成功"}
                            ,{xh:13,cjr:"cjr",cjje:"10,000.00",jrsj:"2016-12-29 08:49:45",xb:"女",zt:"成功"}
                            ,{xh:13,cjr:"cjr",cjje:"10,000.00",jrsj:"2016-12-29 08:49:45",xb:"男",zt:"成功"}
                        ]
                    }
                    ,pager: {
                        currentPage:2
                        ,totalPage:3

                    }
                }
                , tc3:{
                    header:{
                        fields:[
                            {tag:"序号",fieldName:"xh"}
                            ,{tag:"出借人",fieldName:"cjr"}
                            ,{tag:"出借金额 （元）",fieldName:"cjje"}
                            ,{tag:"加入时间",fieldName:"jrsj"}
                            ,{tag:"状态",fieldName:"zt"}
                            ,{tag:"状态",fieldName:"zt1"}
                            ,{tag:"状态",fieldName:"zt2"}
                        ]
                    }
                    ,body:{
                        data:[
                            {xh:23,cjr:"cjr",cjje:"10,000.00",jrsj:"2016-12-29 08:49:45",zt:"成功",zt1:"成功",zt2:"成功"}
                            ,{xh:23,cjr:"cjr",cjje:"10,000.00",jrsj:"2016-12-29 08:49:45",zt:"成功",zt1:"成功",zt2:"成功"}
                            ,{xh:23,cjr:"cjr",cjje:"10,000.00",jrsj:"2016-12-29 08:49:45",zt:"成功",zt1:"成功",zt2:"成功"}
                            ,{xh:23,cjr:"cjr",cjje:"10,000.00",jrsj:"2016-12-29 08:49:45",zt:"成功",zt1:"成功",zt2:"成功"}
                            ,{xh:23,cjr:"cjr",cjje:"10,000.00",jrsj:"2016-12-29 08:49:45",zt:"成功",zt1:"成功",zt2:"成功"}
                        ]
                    }
                    ,pager: {
                        currentPage:1
                        ,totalPage:1

                    }
                }
                , tc4:{
                    header:{
                        fields:[
                            {tag:"序号",fieldName:"xh"}
                            ,{tag:"出借人",fieldName:"cjr"}
                            ,{tag:"出借金额 （元）",fieldName:"cjje"}
                            ,{tag:"加入时间",fieldName:"jrsj"}
                            ,{tag:"状态",fieldName:"zt"}
                            ,{tag:"状态",fieldName:"zt1"}
                            ,{tag:"状态",fieldName:"zt2"}
                            ,{tag:"状态",fieldName:"zt3"}
                        ]
                    }
                    ,body:{
                        data:[
                            {xh:33,cjr:"cjr",cjje:"10,000.00",jrsj:"2016-12-29 08:49:45",zt:"成功",zt1:"成功",zt2:"成功",zt3:"成功"}
                            ,{xh:33,cjr:"cjr",cjje:"10,000.00",jrsj:"2016-12-29 08:49:45",zt:"成功",zt1:"成功",zt2:"成功",zt3:"成功"}
                            ,{xh:33,cjr:"cjr",cjje:"10,000.00",jrsj:"2016-12-29 08:49:45",zt:"成功",zt1:"成功",zt2:"成功",zt3:"成功"}
                            ,{xh:33,cjr:"cjr",cjje:"10,000.00",jrsj:"2016-12-29 08:49:45",zt:"成功",zt1:"成功",zt2:"成功",zt3:"成功"}
                            ,{xh:33,cjr:"cjr",cjje:"10,000.00",jrsj:"2016-12-29 08:49:45",zt:"成功",zt1:"成功",zt2:"成功",zt3:"成功"}
                        ]
                    }
                    ,pager: {
                        currentPage:5
                        ,totalPage:10

                    }
                }
            }
            ,tabData:{
            currentTabIndex:0
            ,data:[
                {
                    tag:"已充值"
                    ,href:"/"
                    ,tabIndex:0
                }
                ,{
                    tag:"已充值"
                    ,href:"/"
                    ,tabIndex:1
                }
                ,{
                    tag:"充值失败"
                    ,href:"/"
                    ,tabIndex:2
                }
                ,{
                    tag:"未处理"
                    ,href:"/"
                    ,tabIndex:3
                }
            ]
        }}));

        switch(action.type){
            case "tabclick":
                state.tabData.currentTabIndex=action.tabIndex;
                return deepCopy(state);
                //return $.extend({},state);
            case "loadData1":
                state.tabContents.tc1=action.data;
                return deepCopy(state);
            case "loadData2":
                state.tabContents.tc2=action.data;
                return deepCopy(state);
            case "loadData3":
                state.tabContents.tc3=action.data;
                return deepCopy(state);
            case "loadData4":
                state.tabContents.tc4=action.data;
                return deepCopy(state);
            default:
                return state;
        }
    }
    ,formCounter:function(state,action){
        state||(state=inits());
        state.formData||(state=$.extend({},state,{
            formData:{
                isValid:false,
                fields:[
                    {
                        name:"name",
                        type:"test",
                        valid:{
                            require:{value:true,tip:"必填项"},
                            regular:{value:'/13\d{2, 4}/',tip:"不符合正则规则"}
                        }
                        ,tip:""
                    }
                    , {
                        name:"msg",
                        type:"test",
                        valid:{
                            require:{value:true,tip:"必填项"},
                            regular:{value:'/13\d{2, 4}/',tip:"不符合正则规则"}
                        }
                        ,tip:""
                    }
                ]
            }
        }))
        switch(action.type){

            case "onblur":
                state.formData.fields.map(function(item,index){
                    item.name==action.data.name&&(
                        item.tip=action.data.tip
                    )
                });

                return deepCopy(state);
            default:
                return state;
        }
    }
}
