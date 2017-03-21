var React = require('react');
var reactRedux = require('react-redux')
require("./tab.scss");
var Redux=require("redux");
var actions=require("../redux/actions.js");
var Table=require("../table/table.js");
var reactRouter=require('react-router');

var connect=reactRedux.connect,provider =reactRedux.Provider,Link=reactRouter.Link;


var TabComtent = React.createClass({

    componentDidMount() {
       this.props.loadData({type:"loadData1",page:1});
    }
    ,click:function(id){
        this.props.onItemClick(id);
        //this.props.outerClick(id);
    }
    ,render: function () {

        var d=this.props.tabData,currentTabIndex=this.props.currentTabIndex,click=this.click;
        var tabs=d.data.map(function(item,index){
            if(index==currentTabIndex){
                return (<div onClick={click.bind(this,item.tabIndex)} className="tab current">
                {item.tag}</div>)
            }
            else{
                return <div onClick={click.bind(this,item.tabIndex)}  className="tab">{item.tag}</div>
            }
        })

        return (
            <div>
                <div className="tabs">
                    {tabs}
                </div>
                <Table isShow={currentTabIndex==0&&true}  data={this.props.tabContents.tc1}  loadData={{loadFn:this.props.loadData,type:"loadData1"}}></Table>
                <Table  isShow={currentTabIndex==1&&true} data={this.props.tabContents.tc2}  loadData={{loadFn:this.props.loadData,type:"loadData2"}}></Table>
                <Table  isShow={currentTabIndex==2&&true} data={this.props.tabContents.tc3}  loadData={{loadFn:this.props.loadData,type:"loadData3"}}></Table>
                <Table  isShow={currentTabIndex==3&&true} data={this.props.tabContents.tc4}  loadData={{loadFn:this.props.loadData,type:"loadData4"}}></Table>
            </div>



        );
    }
});


const mapStateToProps =function (state) {
    return {
        tabData:state.tabCounter.tabData
        ,currentTabIndex:state.tabCounter.tabData.currentTabIndex
        ,tabContents:state.tabCounter.tabContents
    }
}

const mapDispatchToProps = function(dispatch ,ownProps) {
    return {
        onItemClick: function(id){
            dispatch(actions.tabClick(id));
        }
        ,loadData:function(option){
            dispatch(actions.loadData(option));
        }

    }
}

var TabComtent=connect(
    mapStateToProps,
    mapDispatchToProps
)(TabComtent);
module.exports =TabComtent;

