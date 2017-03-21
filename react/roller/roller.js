var React = require('react');
require("./roller.css");



var RollerClick=React.createClass({
    getInitialState:function(){
        return {
            rollerClick:""
        }
    },
    componentDidMount:function() {
        var w = $(".roller .roller_footer").width();
        var pw = $(".roller .roller_footer").parent().width();
        var ph = $(".roller").height();
        var cmh = $(".roller .leftClick").height();

    }
        ,render:function(){
        var className=this.props.rollerClick+" position_a ";
        return (
            <div className={className} ></div>
        );
    }
})

var RollerFooter=React.createClass({
    render:function(){
        return (
            <div className="roller_footer align_c position_a " >
            {
                this.props.footerItem.map(function(item,i){
                    return (
                        <div data-index={i}></div>
                    );
                })
            }
            </div>
        );
    }
});

var RollerConment=React.createClass({
    render:function(){

        var totalWidth=0;
        var borderWidth=this.props.borderWidth;
       var items=  this.props.items.map(function(item,index){
          totalWidth=totalWidth+item.width+borderWidth;
            return (
                <div className="display_ilb">
                    <a target="_blank" href={item.href}>
                        <img  src={item.imgUrl}/>
                    </a>
                </div>
            );
        });
        return  (<div className="comtent position_r" style={{"width":totalWidth}}>
                    {items}
        </div>);
    }
});

var roller = React.createClass({
    getInitialState:function(){
        return {
            currentIndex:0,
            items:[
                {
                    imgUrl:"http://cdn.yingu.com/upload/image/20160928/2b94e8d8f4d702d5331fccbd387169dc.jpg"
                    ,width:1200
                    ,href:"http://www.baidu.com"
                }
                , {
                    imgUrl:"http://cdn.yingu.com/upload/image/20161125/2548b11109bbe48a442c3b8a0f023bc.jpg"
                    ,width:1200
                    ,href:"http://www.baidu.com"
                }
                , {
                    imgUrl:"http://cdn.yingu.com/upload/image/20161029/ed9cd9aa1a6895560932461d8de834fa.jpg"
                    ,width:1200
                    ,href:"http://www.baidu.com"
                }
                , {
                    imgUrl:"http://cdn.yingu.com/upload/image/20161125/2548b11109bbe48a442c3b8a0f023bc.jpg"
                    ,width:1200
                    ,href:"http://www.baidu.com"
                }
                , {
                    imgUrl:"http://cdn.yingu.com/upload/image/20161029/ed9cd9aa1a6895560932461d8de834fa.jpg"
                    ,width:1200
                    ,href:"http://www.baidu.com"
                }
                , {
                    imgUrl:"http://cdn.yingu.com/upload/image/20161125/2548b11109bbe48a442c3b8a0f023bc.jpg"
                    ,width:1200
                    ,href:"http://www.baidu.com"
                }
                , {
                    imgUrl:"http://cdn.yingu.com/upload/image/20161029/ed9cd9aa1a6895560932461d8de834fa.jpg"
                    ,width:1200
                    ,href:"http://www.baidu.com"
                }
                , {
                    imgUrl:"http://cdn.yingu.com/upload/image/20161125/2548b11109bbe48a442c3b8a0f023bc.jpg"
                    ,width:1200
                    ,href:"http://www.baidu.com"
                }
                , {
                    imgUrl:"http://cdn.yingu.com/upload/image/20160928/2b94e8d8f4d702d5331fccbd387169dc.jpg"
                    ,width:1200
                    ,href:"http://www.baidu.com"
                }
            ]
            , option:{
                showFooter:true//是否显示底部小圆圈
                ,showClick:true//是否显示点击按钮
                ,rollerType:1//备用
                ,borderWidth:4//每个item左右边框的总宽度
                ,autoPlay:true//是否自动播放
                ,playInterver:3000//自动播放间隔
                ,itemCount:1//conWidth宽度下显示几个item 和数据的width配合
                ,conWidth:1200//容器宽度
                ,hasCurrentClass:true//是否添加当前item的当前类用于区别其它item
            }
        }
    },
    setOff:function(index,lcount){
        var borderWidth=this.state.option.borderWidth;
        var leftWidth=0;
        var items=this.state.items.length;
        if(items-lcount>=index){
            for(var i=0;i<index;i++){
                (leftWidth=leftWidth+this.state.items[i].width+borderWidth);
            }

        }else{
            index=items-lcount;
            for(var i=0;i<index;i++){
                (leftWidth=leftWidth+this.state.items[i].width+borderWidth);
            }

        }
        $(".roller .comtent").css({"left":-leftWidth})

    },
    setCurrentFlag:function(clickflag,index){
        var last=index,current=index;
        if(clickflag==1){
            last=index-1;
            current=index;

        }else{
            last=index+1;
            current=index;
        }
        this.addCurrentClass(current,last);

        $(".roller .roller_footer>div").eq(current).addClass("current_item_footer");
        $(".roller .roller_footer>div").eq(last).removeClass("current_item_footer");


    },
    componentDidMount:function(){
        $(".roller").css({"width":this.state.option.itemCount*this.state.option.borderWidth+this.state.option.conWidth});
        var w=$(".roller .roller_footer").width();
        var pw=$(".roller .roller_footer").parent().width();
        var ph=$(".roller").height();
        var cmh=$(".roller .leftClick").height(),items=this.state.items.length;

        this.state.option.hasCurrentClass&&$(".roller .comtent>div").eq(0).addClass("current_item");
        $(".roller .roller_footer>div").eq(0).addClass("current_item_footer");
        var imgw=this.state.items[0].width;
        var conCount=parseInt(pw/imgw);
        $(".roller .roller_footer").css({"left":(pw-w)/2,"z-index":9});

        var state=this.state;
        var footerTipClick=this.footerTipClick, change=this.change,setCurrentFlag=this.setCurrentFlag;

        $(".roller .leftClick").css({"top":"30%","z-index":9}).on("click",function(evt){
            change(1,items,conCount);
        });
        $(".roller .rightClick").css({"top":"30%","right":"0","z-index":9}).on("click",function(){
            change(-1,1,conCount);
        });

        $(".roller .roller_footer>div").on("click",function(evt){
            var last=state.currentIndex;
            var current=parseInt($(evt.target).attr("data-index"));
            (last!=current)&&footerTipClick(last,current,conCount);

        });
        this.state.option.autoPlay&&this.autoPlay();
    },
    autoPlay:function(){
        var state=this.state,props=this.state;
        var count=props.items.length-1;
        var flag=true;
       var t= setInterval(function(){

              if(flag){
                  $(".roller .leftClick").trigger("click");
                  state.currentIndex==count&& (flag=false);

              }else{
                  $(".roller .rightClick").trigger("click");
                  state.currentIndex==0&& (flag=true);
              }


        },props.option.playInterver);

    },
    footerTipClick:function(last,current,lcount){
        this.addCurrentClass(current,last);

        $(".roller .roller_footer>div").eq(current).addClass("current_item_footer");
        $(".roller .roller_footer>div").eq(last).removeClass("current_item_footer");

        this.state.currentIndex=current;

        this.setOff(current,lcount);
    },
    addCurrentClass:function(current,last){
        this.state.option.hasCurrentClass&&$(".roller .comtent>div").eq(current).addClass("current_item");
        this.state.option.hasCurrentClass&&$(".roller .comtent>div").eq(last).removeClass("current_item");
    },
    change:function(flag,count,lcount){
        var setOff=this.setOff,setCurrentFlag=this.setCurrentFlag,state=this.state;
        var currentIndex=state.currentIndex;
        if(flag==1){

            if(currentIndex<count-1){
                currentIndex=++state.currentIndex;
                setCurrentFlag(flag,currentIndex);
                setOff(currentIndex,lcount);
            }
        }
        else if(flag==-1){

            if(currentIndex>=count){
                currentIndex=--state.currentIndex;
                setCurrentFlag(flag,currentIndex);
                setOff(currentIndex,lcount);
            }
        }

    },
    render: function () {

        var footerItem=this.state.items;

        return (
            <div className="roller position_r">
                <RollerConment borderWidth={this.state.option.borderWidth} currentIndex={this.state.currentIndex} items={footerItem}></RollerConment>
                {this.state.option.showClick && <RollerClick rollerClick="leftClick"></RollerClick>}
                {this.state.option.showClick && <RollerClick rollerClick="rightClick"></RollerClick>}
                {this.state.option.showFooter && <RollerFooter footerItem={footerItem}></RollerFooter>}
            </div>
        );
    }
});

module.exports = roller;




