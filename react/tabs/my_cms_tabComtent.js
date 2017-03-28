var React = require('react');
var reactRedux = require('react-redux')
require("./tab.scss");
var Redux=require("redux");
var actions=require("../../cms/my_cms/redux/actions.js");
var Codeeditor=require("../codeeditor/tab_codeeditor.js");
var Fileexplorer=require("../fileexplorer/fileexplorer.js");
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
    ,componentDidMount:function(e){

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
        let codeopt={selectFile:this.props.opt.selectFile};


        return (
            <div >
                <div className="tabs">
                    {tabs}
                </div>
                <Codeeditor  opt={codeopt} isShow={currentTabIndex==0&&true}  ></Codeeditor>
                <Fileexplorer  opt={codeopt} isShow={currentTabIndex==1&&true}  ></Fileexplorer>
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

