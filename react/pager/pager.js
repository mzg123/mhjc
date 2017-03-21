var React = require('react');
require("./pager.scss");
//var reactRedux = require('react-redux')
//var Redux=require("redux");
//var actions=require("../redux/actions.js");
//var reactRouter=require('react-router');
//
//var connect=reactRedux.connect,provider =reactRedux.Provider,Link=reactRouter.Link;


var Pager = React.createClass({
    getInitialState:function(){
      return {
          currentPage:2
          ,totalPage:3

      }
    },
    init:function(option){
        var pagerItems=[];
        if(option)
        if(option.totalPage==1){
             var c= option.currentPage==1?"current":"";
              pagerItems.push(<div  className={c}>1</div>);

          }
          else if(option.totalPage<=10&&option.totalPage>=2){
              var c= option.currentPage==1?"current":"";
              var pre=option.currentPage==1?" pre disable ":" pre ";
              var next=option.currentPage==option.totalPage?" next disable ":" next ";

              pagerItems.push(<div onClick={this.click.bind(this,option.currentPage-1)} currentPage className={pre}>上一页</div>);
              pagerItems.push(<div onClick={this.click.bind(this,1)} className={c}>1</div>);
              for(var i=2;i<=option.totalPage;i++){
                  c= option.currentPage==i?"current":"";
                  pagerItems.push(<div onClick={this.click.bind(this,i)} className={c}>{i}</div>);
              }
              pagerItems.push(<div onClick={this.click.bind(this,option.currentPage+1)}  className={next}>下一页</div>);

          }
          else{
              var c= option.currentPage==1?"current":"";
              var pre=option.currentPage==1?" pre disable ":" pre ";
              var next=option.currentPage==option.totalPage?" next disable ":" next ";
              //var r=' <div class="'+pre+'">上一页</div>';
              pagerItems.push(<div onClick={this.click.bind(this,option.currentPage-1)} className={pre}>上一页</div>);
              if(option.currentPage<=4){
                  for(var i=1;i<=7;i++){
                      c= option.currentPage==i?"current":"";
                      //r=r+'<div class="'+c+'">'+i+'</div>';
                      pagerItems.push(<div onClick={this.click.bind(this,i)} className={c}>{i}</div>);
                  }
                  pagerItems.push(<div >...</div>);
              }
              else if(option.totalPage-option.currentPage<=5){
                  for(var i=1;i<=8;i++){
                      c=option.totalPage- option.currentPage;
                      i<=3&&( pagerItems.push(<div onClick={this.click.bind(this,i)}>{i}</div>));
                      i==4&&(pagerItems.push(<div >...</div>));
                      i==5&&(pagerItems.push(<div onClick={this.click.bind(this,option.totalPage-5)} className={c==5?"current":""}>{option.totalPage-5}</div>));
                      i==6&&(pagerItems.push(<div onClick={this.click.bind(this,option.totalPage-4)} className={c==4?"current":""}>{option.totalPage-4}</div>));
                      i==7&&(pagerItems.push(<div onClick={this.click.bind(this,option.totalPage-3)} className={c==3?"current":""}>{option.totalPage-3}</div>));
                      i==8&&(pagerItems.push(<div onClick={this.click.bind(this,option.totalPage-2)} className={c==2?"current":""}>{option.totalPage-2}</div>));
                  }
              }
              else if(option.totalPage-option.currentPage>5&&option.currentPage>4){
                  for(var i=1;i<=7;i++){
                      c=option.totalPage- option.currentPage;
                      i<=2&&( pagerItems.push(<div onClick={this.click.bind(this,i)} >{i}</div>));
                      i==3&&(pagerItems.push(<div >...</div>));
                      i==4&&(pagerItems.push(<div onClick={this.click.bind(this,option.currentPage-1)}>{option.currentPage-1}</div>));
                      i==5&&(pagerItems.push(<div onClick={this.click.bind(this,option.currentPage)} className="current">{option.currentPage}</div>));
                      i==6&&(pagerItems.push(<div onClick={this.click.bind(this,option.currentPage+1)}>{option.currentPage+1}</div>));
                      i==7&&(pagerItems.push(<div onClick={this.click.bind(this,option.currentPage+2)}>{option.currentPage+2}</div>));
                  }
                  pagerItems.push(<div >...</div>);
              }

              c=option.totalPage-option.currentPage;
              pagerItems.push(<div onClick={this.click.bind(this,option.totalPage-1)} className={c==1?"current":""}>{option.totalPage-1}</div>);
              pagerItems.push(<div onClick={this.click.bind(this,option.totalPage)} className={c==0?"current":""}>{option.totalPage}</div>);
              pagerItems.push(<div onClick={this.click.bind(this,option.currentPage+1)} className={next}>下一页</div>)
             //r+';
          }
        return pagerItems;
    },
    click:function(currentPage){

        var option=this.props.option;//this.getInitialState();
        if(currentPage<1||currentPage>option.totalPage)
          return;
        option.currentPage=currentPage;
        //this.setState(option);
        this.props.loadData.loadFn({type:this.props.loadData.type,page:currentPage});
    },
    render: function () {
        var option=this.props.option;//this.state;//this.props.option;
        //var option= this.state;//this.props.option;
        var r=this.init(option);

        return (

            <div className="pager" >
            {r}
            </div>
        );
    }
});


//const mapStateToProps =function (state) {
//    return {
//        tabData:state.tabCounter.tabData
//        ,currentTabIndex:state.tabCounter.tabData.currentTabIndex
//    }
//}
//
//const mapDispatchToProps = function(dispatch ,ownProps) {
//    return {
//        onItemClick: function(id){
//            dispatch(actions.tabClick(id));
//        }
//
//    }
//}

//var Pager=connect(
//    mapStateToProps,
//    mapDispatchToProps
//)(Pager);
module.exports =Pager;

