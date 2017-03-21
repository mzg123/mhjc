var React = require('react');
var reactRedux = require('react-redux')
var Redux=require("redux");
var actions=require("../redux/actions.js");
var reactRouter=require('react-router');

var connect=reactRedux.connect,provider =reactRedux.Provider,Link=reactRouter.Link;

var ModalTest=React.createClass({
    render:function(){
        var modal1={close:this.props.close1,id:"modal1",width:200,height:100,
            sureClick:this.props.show2,sureClose:0,
            sureClickParam:modal2,content:"<div style='color:red'>444444444</div>"}
        var modal2={close:this.props.close2,id:"modal2",width:200,height:100,
            sureClick:this.props.close2,
            sureClickParam:{a:3},content:"<div style='color:blue'>444444444</div>"}
        modal1.sureClickParam=modal2
        var click=this.props.onItemClick
        return (
           <div>
               <button onClick={click.bind(this,"showM1",modal1)}>modal1</button>
               <button  onClick={click.bind(this,"showM2",modal2)}>modal2</button>
           </div>

        )
    }
})

const mapStateToProps =function (state) {
    return {
        tabData:state.tabCounter.tabData
        ,currentTabIndex:state.tabCounter.tabData.currentTabIndex
    }
}

const mapDispatchToProps = function(dispatch ,ownProps) {
    return {
        onItemClick: function(type,option){
            dispatch({type:type,option:option});
        }
        ,close1:function(){
            dispatch({type:"hiddenM1"});
        }
        ,close2:function(){
            dispatch({type:"hiddenM2"});
        }
        ,show2:function(option){
            dispatch({type:"showM2",option:option});
        }
    }
}

var ModalTest=connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalTest);

module.exports=ModalTest;
