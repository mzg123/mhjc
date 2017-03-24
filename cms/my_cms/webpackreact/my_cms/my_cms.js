var React = require('react');
var reactRedux = require('react-redux')
require("./my_cms.css");
var Redux=require("redux");
var actions=require("../../redux/actions.js");
var Tree=require("../../../../react/tree_react/my_cms_tree.js");
var Nav=require("../../../../react/nav/nav.js");
var Codeeditor=require("../../../../react/codeeditor/codeeditor.js");

var connect=reactRedux.connect,provider =reactRedux.Provider;

class my_cms extends React.Component{
    constructor (){
        super()
    }

    render(){

        let codeopt={selectFile:this.props.selectFile};
        return(
            <div className="home">
                <div className="nav" id="nav">
                    <Nav></Nav>
                </div>
                <div className="main">
                    <div  className="left" id="left">
                        <Tree></Tree>
                    </div>
                    <Codeeditor opt={codeopt}></Codeeditor>
                </div>
            </div>

        )
    }
}

const mapStateToProps =function (state) {
    return {
        selectFile:state.treeCounter.selectFile

    }
}

const mapDispatchToProps = function(dispatch ,ownProps) {
    return {



    }
}

var mycms=connect(
    mapStateToProps,
    mapDispatchToProps
)(my_cms);
//export default navcon;
module.exports =mycms;