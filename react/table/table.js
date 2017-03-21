var React = require('react');
require("./table.scss");
var Pager=require("../pager/pager.js");
//var reactRedux = require('react-redux')
//var Redux=require("redux");
//var actions=require("../redux/actions.js");
//var reactRouter=require('react-router');
//
//var connect=reactRedux.connect,provider =reactRedux.Provider,Link=reactRouter.Link;


var Table = React.createClass({

    getInitialState() {
        return {
            header:{
               fields:[
                   {tag:"序号",fieldName:"xh"}
                   ,{tag:"出借人",fieldName:"cjr"}
                   ,{tag:"出借金额 （元）",fieldName:"cjje"}
                   ,{tag:"加入时间",fieldName:"jrsj"}
                   ,{tag:"状态",fieldName:"zt"}
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
        }
    }

    ,render: function () {
        var data=this.props.data;
        var pager=this.props.data.pager;
        var fields=data.header.fields?data.header.fields:[],data=data.body.data?data.body.data:[];
        var c="table "+(this.props.isShow?"":" display_n")
        return (
            <div className={c}>
                    <table >
                        <thead>
                            <tr>
                            {
                                fields.map(function(item,index){
                                   return <th>{item.tag}</th>
                                })
                             }

                            </tr>
                        </thead>
                        <tbody >
                        {
                            data.map(function(item,index){
                              return  <tr>
                              {fields.map(function(field,fieldindex){
                                   return <th>{item[field.fieldName]}</th>
                               })}
                              </tr>
                           })
                         }

                        </tbody>
                    </table>
             <Pager option={pager} loadData={this.props.loadData}></Pager>
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
//
//var Table=connect(
//    mapStateToProps,
//    mapDispatchToProps
//)(Table);
module.exports =Table;

