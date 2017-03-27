var React = require('react');
var reactRedux = require('react-redux')
require("./fileexplorer.scss");
var Redux=require("redux");
var actions=require("../../cms/my_cms/redux/actions.js");

var connect=reactRedux.connect,provider =reactRedux.Provider;

class fileexplorer extends React.Component{
    constructor(){
        super();
    }

    componentDidMount(){

}
    render(){

       var c=" fileexplorer "+(this.props.isShow?"":" display_n");
        return (
            <div id="fileexplorer" className={c} style={{width:'100%',height:'100%'}}>
                 <ul>
                    <li>
                     <div className="thumbnail folder"></div>
                     <div className="name">name</div>
                    </li>
                    <li>
                        <div className="thumbnail folder"></div>
                        <div className="name">name</div>
                    </li>
                    <li>
                        <div className="thumbnail pic"></div>
                        <div className="name">name</div>
                    </li>
                    <li>
                        <div className="thumbnail txt"></div>
                        <div className="name">name</div>
                    </li>
                 </ul>
            </div>
        )
    }
}

const mapStateToProps =function (state) {
    return {

    }
}

const mapDispatchToProps = function(dispatch ,ownProps) {
    return {
        saveFile:function(opt){

            dispatch(actions.saveFileContent(opt));
        }
    }
}

var fileexplore=connect(
    mapStateToProps,
    mapDispatchToProps
)(fileexplorer);
//export default navcon;
module.exports =fileexplore;