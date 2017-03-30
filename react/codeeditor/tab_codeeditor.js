var React = require('react');
var reactRedux = require('react-redux')
require("./codeeditor.scss");
var Redux=require("redux");
var actions=require("../../cms/my_cms/redux/actions.js");
import { Link } from 'react-router';
var connect=reactRedux.connect,provider =reactRedux.Provider;

class codeeditor extends React.Component{
    constructor(){
        super();
    }
    saveFileContent(fileName){
        fileName&&this.props.saveFile({filePath:fileName});
    }
    componentDidMount(){

}
    render(){
        let selectFile=this.props.opt.selectFile,saveFile=this.saveFileContent;

        return (
            <div id="codeeditor" className={this.props.isShow?"":" display_n"} style={{width:'100%',height:'95%'}}>
                <button className='code_tool' data-fileName={selectFile} onClick={saveFile.bind(this,selectFile)} id="save">保存</button>
                <textarea  id="container" name="content" >
                </textarea >
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

var mcodeeditor=connect(
    mapStateToProps,
    mapDispatchToProps
)(codeeditor);
//export default navcon;
module.exports =mcodeeditor;